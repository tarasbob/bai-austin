import { describe, it, expect } from 'vitest';
import {
  projectDetails,
  getProjectCategory,
  getAllCategorySlugs,
} from '@/lib/projects-data';
import { projectCategories } from '@/lib/constants';

describe('projects-data', () => {
  it('exports all 10 project categories', () => {
    expect(Object.keys(projectDetails)).toHaveLength(10);
  });

  it('has a matching entry for every project category slug', () => {
    const slugs = getAllCategorySlugs();
    for (const cat of projectCategories) {
      expect(slugs).toContain(cat.id);
    }
  });

  it('each category has at least one project', () => {
    for (const [slug, detail] of Object.entries(projectDetails)) {
      expect(detail.projects.length).toBeGreaterThan(0);
      expect(detail.slug).toBe(slug);
      expect(detail.title).toBeTruthy();
      expect(detail.heroImage).toBeTruthy();
    }
  });

  it('every project has required fields', () => {
    for (const detail of Object.values(projectDetails)) {
      for (const project of detail.projects) {
        expect(project.id).toBeTruthy();
        expect(project.name).toBeTruthy();
        expect(project.location).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.description.length).toBeGreaterThan(20);
      }
    }
  });

  it('getProjectCategory returns correct data for valid slug', () => {
    const sports = getProjectCategory('sports');
    expect(sports).toBeDefined();
    expect(sports!.title).toBe('Sports, Leisure & Recreation');
    expect(sports!.projects.length).toBe(7);
  });

  it('getProjectCategory returns undefined for invalid slug', () => {
    expect(getProjectCategory('nonexistent')).toBeUndefined();
  });

  it('getAllCategorySlugs returns all 10 slugs', () => {
    const slugs = getAllCategorySlugs();
    expect(slugs).toHaveLength(10);
    expect(slugs).toContain('sports');
    expect(slugs).toContain('collegiate');
    expect(slugs).toContain('k12');
    expect(slugs).toContain('religious');
    expect(slugs).toContain('performing-arts');
    expect(slugs).toContain('convention');
    expect(slugs).toContain('corporate-gov');
    expect(slugs).toContain('healthcare');
    expect(slugs).toContain('museums');
    expect(slugs).toContain('studios');
  });

  it('project IDs are unique within each category', () => {
    for (const detail of Object.values(projectDetails)) {
      const ids = detail.projects.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('hero images reference correct project category paths', () => {
    for (const detail of Object.values(projectDetails)) {
      expect(detail.heroImage).toMatch(/^\/images\/projects\//);
    }
  });
});
