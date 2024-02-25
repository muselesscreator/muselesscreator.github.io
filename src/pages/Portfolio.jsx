import React from 'react';
import classNames from 'classnames';
import {
  FaChevronDown,
  FaEye,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  RiNpmjsFill,
  RiGithubFill,
} from 'react-icons/ri';

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
  const githubLink = (
    <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
      {githubRepo}
    </a>
  );
  const npmLink = (
    <a href={packageUrl} className="project-link" target="_blank" rel="noopener noreferrer">
      {packageName}
    </a>
  );
  return (
    <li className="project-item active">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <p>{description}</p>
            <FaEye />
          </div>
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <h4 className="project-title">{title}</h4>
        <p className="project-category">{category}</p>
      </a>
      <div className="project-links">
        <p><RiGithubFill style={{ transform: 'translate(0, 2px)' }}/>: {githubLink}</p>
        <p><RiNpmjsFill style={{ transform: 'translate(0, 2px)' }}/>: {npmLink}</p>
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
          <select className="filter-select" aria-label="Select category">
            <option className="select-item">Select category <FaChevronDown /></option>
            <option
              className={classNames('select-item', { active: projectFilter === ProjectCategories.all })}
              onClick={handleCategoryChange(ProjectCategories.all)}
            >
              {ProjectCategories.all} <FaChevronDown />
            </option>
            <option
              className={classNames('select-item', { active: projectFilter === ProjectCategories.public })}
              onClick={handleCategoryChange(ProjectCategories.public)}
            >
              {ProjectCategories.public}<FaChevronDown />
            </option>
            <option
              className={classNames('select-item', { active: projectFilter === ProjectCategories.openSource })}
              onClick={handleCategoryChange(ProjectCategories.openSource)}
            >
              {ProjectCategories.openSource}<FaChevronDown />
            </option>
          </select>
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
