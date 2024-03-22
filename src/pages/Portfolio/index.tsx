import ProjectCard from './ProjectCard';
import ProjectLinks from './ProjectLinks';
import usePortfolioData from './usePortfolioData';
import ProjectFilters from './ProjectFilters';
import './Portfolio.scss';

const Portfolio = () => {
  const {
    projectFilter,
    handleCategoryChange,
    handleFilterChange,
    filteredProjects,
  } = usePortfolioData();
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ProjectFilters
          projectFilter={projectFilter}
          handleCategoryChange={handleCategoryChange}
          handleFilterChange={handleFilterChange}
        />
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item active" key={project.title}>
              <ProjectCard {...project} />
              <ProjectLinks {...project} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
