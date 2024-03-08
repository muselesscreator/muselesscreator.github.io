import React from 'react';

import projects, { ProjectCategories } from './data';

const usePageData = () => {
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
/*

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={classNames({ active: projectFilter === ProjectCategories.all })}
              onClick={handleCategoryChange(ProjectCategories.all)}
            >
              {ProjectCategories.all}
            </button>
          </li>
          <li className="filter-item">
            <button
              className={classNames({ active: projectFilter === ProjectCategories.public })}
              onClick={handleCategoryChange(ProjectCategories.public)}
            >
              {ProjectCategories.public}
            </button>
          </li>
          <li className="filter-item">
            <button
              className={classNames({ active: projectFilter === ProjectCategories.openSource })}
              onClick={handleCategoryChange(ProjectCategories.openSource)}
            >
              {ProjectCategories.openSource}
            </button>
          </li>
        </ul>
        <div className="filter-select-box">
          <Select
            label="Select category"
            options={[
              { label: ProjectCategories.all, value: ProjectCategories.all },
              { label: ProjectCategories.public, value: ProjectCategories.public },
              { label: ProjectCategories.openSource, value: ProjectCategories.openSource },
            ]}
            value={projectFilter}
            handleChange={(value) => setProjectFilter(value)}
          />
        </div>
        <ul className="project-list">
          {projects.filter((project) => project.category === projectFilter || projectFilter === ProjectCategories.all).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
*/

export default usePageData;
