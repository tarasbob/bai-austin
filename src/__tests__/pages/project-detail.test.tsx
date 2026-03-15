import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { projectDetails } from '@/lib/projects-data';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(props)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <div {...safeProps}>{children}</div>;
    },
  },
}));

let notFoundCalled = false;
vi.mock('next/navigation', () => ({
  notFound: () => {
    notFoundCalled = true;
    throw new Error('NOT_FOUND');
  },
}));

import ProjectCategoryPage from '@/app/projects/[category]/page';

describe('ProjectCategoryPage', () => {
  beforeEach(() => {
    notFoundCalled = false;
  });

  it('renders the sports category page with all projects', async () => {
    const page = await ProjectCategoryPage({ params: Promise.resolve({ category: 'sports' }) });
    render(page);
    expect(screen.getByText('Sports, Leisure & Recreation')).toBeInTheDocument();
    for (const project of projectDetails.sports.projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.location)).toBeInTheDocument();
    }
  });

  it('renders the healthcare category page', async () => {
    const page = await ProjectCategoryPage({
      params: Promise.resolve({ category: 'healthcare' }),
    });
    render(page);
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
    expect(screen.getByText('University of Mary Hardin-Baylor')).toBeInTheDocument();
  });

  it('renders back link to projects page', async () => {
    const page = await ProjectCategoryPage({ params: Promise.resolve({ category: 'museums' }) });
    render(page);
    const backLink = screen.getByText('All Projects');
    expect(backLink.closest('a')).toHaveAttribute('href', '/projects');
  });

  it('renders the project count', async () => {
    const page = await ProjectCategoryPage({ params: Promise.resolve({ category: 'studios' }) });
    render(page);
    expect(screen.getByText(/1 project/)).toBeInTheDocument();
  });

  it('renders the CTA section', async () => {
    const page = await ProjectCategoryPage({
      params: Promise.resolve({ category: 'convention' }),
    });
    render(page);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('calls notFound for invalid category', async () => {
    try {
      const page = await ProjectCategoryPage({
        params: Promise.resolve({ category: 'nonexistent' }),
      });
      render(page);
    } catch {
      // Expected
    }
    expect(notFoundCalled).toBe(true);
  });

  it('renders each category page without errors', async () => {
    for (const [slug, detail] of Object.entries(projectDetails)) {
      const page = await ProjectCategoryPage({ params: Promise.resolve({ category: slug }) });
      const { unmount } = render(page);
      expect(screen.getByText(detail.title)).toBeInTheDocument();
      unmount();
    }
  });
});
