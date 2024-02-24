import React from 'react';
import classNames from 'classnames';
import {
  FaChevronDown,
  FaEye,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import projects, { ProjectCategories } from '../data/projects';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    category,
    githubUrl,
    githubRepo,
    packageName,
    packageUrl,
    image,
    projectUrl,
  } = project;
  return (
    <li className="project-item active">
      <a href={projectUrl}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <p>{description}</p>
            <FaEye />
          </div>
          <img src={image} alt="title" loading="lazy" />
        </figure>
        <h4 className="project-title">{title}</h4>
        <p className="project-category">{category}</p>
      </a>
      <div className="project-links">
        <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          github: {githubRepo} <FaExternalLinkAlt />
        </a>
        <a href={packageUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          npm: {packageName} <FaExternalLinkAlt />
        </a>
      </div>
    </li>
  );
};

const Portfolio = () => {
  const [projectFilter, setProjectFilter] = React.useState(ProjectCategories.all);
  const handleCategoryChange = (category) => () => setProjectFilter(category);
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
          <button
            className="filter-select"
          >
            <div className="select-value">Select category</div>
            <div className="select-icon"><FaChevronDown /></div>
          </button>
          <ul>
            <li
              className={classNames('select-item', { active: projectFilter === ProjectCategories.all })}
              onClick={handleCategoryChange(ProjectCategories.all)}
            >
              {ProjectCategories.all}
            </li>
            <li
              className={classNames('select-item', { active: projectFilter === ProjectCategories.public })}
              onClick={handleCategoryChange(ProjectCategories.public)}
            >
              {ProjectCategories.public}
            </li>
            <li
              className={classNames('select-item', { active: projectFilter === ProjectCategories.openSource })}
              onClick={handleCategoryChange(ProjectCategories.openSource)}
            >
              {ProjectCategories.openSource}
            </li>
          </ul>
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
