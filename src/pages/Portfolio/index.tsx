import classNames from 'classnames';

import Select from '~/components/Select/index';

import { ProjectCategories } from './data';
import ProjectCard from './ProjectCard';
import usePageData from './usePageData';

const Portfolio = () => {
  const {
    projectFilter,
    handleCategoryChange,
    handleFilterChange,
    filteredProjects,
  } = usePageData();
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
            handleChange={handleFilterChange}
          />
        </div>
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
