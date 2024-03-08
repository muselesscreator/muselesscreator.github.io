import {
  FaEye,
} from 'react-icons/fa';
import {
  RiNpmjsFill,
  RiGithubFill,
} from 'react-icons/ri';

import { ProjectData } from './data';

type Props = {
  project: ProjectData,
}
const ProjectCard = ({ project }: Props) => {
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

export default ProjectCard;

