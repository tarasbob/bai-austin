import { describe, it, expect } from 'vitest';
import {
  navLinks,
  heroSlides,
  stats,
  services,
  projectCategories,
  teamMembers,
  offices,
  socialLinks,
  historyContent,
} from '@/lib/constants';

describe('constants data integrity', () => {
  it('has 5 navigation links', () => {
    expect(navLinks).toHaveLength(5);
    expect(navLinks[0].href).toBe('/');
    expect(navLinks.every((l) => l.label && l.href)).toBe(true);
  });

  it('has 4 hero slides with required fields', () => {
    expect(heroSlides).toHaveLength(4);
    for (const slide of heroSlides) {
      expect(slide.id).toBeDefined();
      expect(slide.title).toBeTruthy();
      expect(slide.image).toMatch(/^\/images\/slides\//);
      expect(slide.gradient).toBeTruthy();
    }
  });

  it('has 3 stats', () => {
    expect(stats).toHaveLength(3);
    for (const stat of stats) {
      expect(stat.value).toBeGreaterThan(0);
      expect(stat.label).toBeTruthy();
    }
  });

  it('has 5 services with required fields', () => {
    expect(services).toHaveLength(5);
    for (const service of services) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.items.length).toBeGreaterThan(0);
    }
  });

  it('has 10 project categories', () => {
    expect(projectCategories).toHaveLength(10);
    for (const cat of projectCategories) {
      expect(cat.id).toBeTruthy();
      expect(cat.title).toBeTruthy();
      expect(cat.image).toMatch(/^\/images\/projects\//);
    }
  });

  it('has 5 team members with contact info', () => {
    expect(teamMembers).toHaveLength(5);
    for (const member of teamMembers) {
      expect(member.name).toBeTruthy();
      expect(member.title).toBeTruthy();
      expect(member.email).toMatch(/@baiaustin\.com$/);
      expect(member.phone).toBeTruthy();
      expect(member.image).toMatch(/^\/images\/team\//);
    }
  });

  it('has 3 offices', () => {
    expect(offices).toHaveLength(3);
    const cities = offices.map((o) => o.city);
    expect(cities).toContain('Austin');
    expect(cities).toContain('Dallas');
    expect(cities).toContain('Houston');
    expect(offices.find((o) => o.city === 'Austin')?.isHQ).toBe(true);
  });

  it('has 3 social links', () => {
    expect(socialLinks).toHaveLength(3);
    for (const link of socialLinks) {
      expect(link.url).toMatch(/^https:\/\//);
    }
  });

  it('history content is complete', () => {
    expect(historyContent.openingQuote).toBeTruthy();
    expect(historyContent.founding).toBeTruthy();
    expect(historyContent.specialties.length).toBeGreaterThan(0);
    expect(historyContent.drBoner.career.length).toBeGreaterThan(0);
    expect(historyContent.drBoner.succession).toBeTruthy();
    expect(historyContent.charlesBoner.bio).toBeTruthy();
    expect(historyContent.richardBoner.bio).toBeTruthy();
    expect(historyContent.firmInfo).toBeTruthy();
    expect(historyContent.memberships.length).toBeGreaterThan(0);
  });
});
