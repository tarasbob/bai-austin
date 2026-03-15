import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '@/components/ProjectCard';
import { projectCategories } from '@/lib/constants';

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

describe('ProjectCard', () => {
  const category = projectCategories[0];

  it('renders category title', () => {
    render(<ProjectCard category={category} index={0} />);
    expect(screen.getByText(category.title)).toBeInTheDocument();
  });

  it('renders category image', () => {
    render(<ProjectCard category={category} index={0} />);
    const img = screen.getByAltText(category.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', category.image);
  });

  it('renders Explore Projects text', () => {
    render(<ProjectCard category={category} index={0} />);
    expect(screen.getByText(/Explore Projects/i)).toBeInTheDocument();
  });

  it('links to the project detail page', () => {
    render(<ProjectCard category={category} index={0} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/projects/${category.id}`);
  });

  it('renders correctly for all categories', () => {
    for (const cat of projectCategories) {
      const { unmount } = render(<ProjectCard category={cat} index={0} />);
      expect(screen.getByText(cat.title)).toBeInTheDocument();
      expect(screen.getByAltText(cat.title)).toBeInTheDocument();
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `/projects/${cat.id}`);
      unmount();
    }
  });
});
