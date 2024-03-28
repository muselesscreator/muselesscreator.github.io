import projects  from '~/data/projects';
import './APIDocs.scss';

const APIDocs = () => (
  <article className="api-docs active">
    <header>
      <h2 className="h2 article-title">API Docs</h2>
      <p className="article-subtitle">
        API Documentation for maintained open-source tools.
      </p>
    </header>
    <div className="about-text">
      {
        projects
          .filter(project => project.apiUrl)
          .map(project => (
            <div key={project.title}>
              <a
                className="project-link"
                key={project.title}
                target="_blank"
                rel="noreferrer"
                href={project.apiUrl}
              >
                <img src={project.image} alt={project.title} />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
            ))
      }
    </div>
  </article>
);

export default APIDocs;
