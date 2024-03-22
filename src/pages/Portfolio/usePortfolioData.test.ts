import React from 'react';
import {
  vi,
  describe,
  test,
  it,
  expect,
  Mock,
} from 'vitest';

import projects, { ProjectCategories } from './data';
import usePortfolioData from './usePortfolioData';

vi.mock('react', () => ({
  default: {
    useState: vi.fn(),
  },
}));
vi.mock('./data', () => {
  const ProjectCategories = {
    category1: 'category1',
    category2: 'category2',
    all: 'all',
  };
  return {
    ...vi.importActual('./data'),
    ProjectCategories,
    default: [
      { 
        title: 'test-project-1',
        description: 'test-description-1',
        category: ProjectCategories.category1,
        githubUrl: 'test-github-url-1',
        githubRepo: 'test-github-repo-1',
      },
      {
        title: 'test-project-2',
        description: 'test-description-2',
        category: ProjectCategories.category2,
        githubUrl: 'test-github-url-2',
        githubRepo: 'test-github-repo-2',
      },
      {
        title: 'test-project-3',
        description: 'test-description-3',
        category: ProjectCategories.category1,
        githubUrl: 'test-github-url-3',
        githubRepo: 'test-github-repo-3',
      },
      {
        title: 'test-project-4',
        description: 'test-description-4',
        category: ProjectCategories.category2,
        githubUrl: 'test-github-url-4',
        githubRepo: 'test-github-repo-4',
      },
    ],
  };
});

const projectFilter = ProjectCategories.all;
const setProjectFilter = vi.fn();
(React.useState as Mock).mockReturnValue([projectFilter, setProjectFilter]);

const testValue = 'test-value';

describe('usePortfolioData', () => {
  describe('behavior', () => {
    it('initializes projectFilter to ProjectCategories.all', () => {
      usePortfolioData();
      expect(React.useState).toHaveBeenCalledWith(ProjectCategories.all);
    });
  });
  describe('output', () =>{ 
    test('handleCategoryChange returns callback to set projectFilter', () => {
      const out = usePortfolioData();
      out.handleCategoryChange(testValue)();
      expect(setProjectFilter).toHaveBeenCalledWith(testValue);
    });
    test('handleFilterChange sets projectFilter directly', () => {
      const out = usePortfolioData();
      out.handleFilterChange(testValue);
      expect(setProjectFilter).toHaveBeenCalledWith(testValue);
    });
    test('filteredProjects returns all projects if projectFilter is ProjectCategories.all', () => {
      const out = usePortfolioData();
      const result = out.filteredProjects;
      expect(result).toEqual(projects);
    });
    test('filteredProjects returns only projects with matching category', () => {
      (React.useState as Mock).mockReturnValueOnce([ProjectCategories.category1, setProjectFilter]);
      expect(usePortfolioData().filteredProjects).toEqual([
        projects[0],
        projects[2],
      ]);
      (React.useState as Mock).mockReturnValueOnce([ProjectCategories.category2, setProjectFilter]);
      expect(usePortfolioData().filteredProjects).toEqual([
        projects[1],
        projects[3],
      ]);
    });
  });
});
