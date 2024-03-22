import React from 'react';

import projects, { ProjectCategories } from './data';

const usePortfolioData = () => {
  const [projectFilter, setProjectFilter] = React.useState(ProjectCategories.all);
  const handleCategoryChange = (value: unknown) => () => setProjectFilter(value as string);
  const handleFilterChange = (value: unknown) => setProjectFilter(value as string);
  const filteredProjects = projects.filter(
    (project: any) => project.category === projectFilter || projectFilter === ProjectCategories.all
  );
  return {
    filteredProjects,
    handleCategoryChange,
    handleFilterChange,
    projectFilter,
  };
};

export default usePortfolioData;
