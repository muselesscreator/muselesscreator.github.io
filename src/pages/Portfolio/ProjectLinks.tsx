import { RiNpmjsFill, RiGithubFill } from 'react-icons/ri';

import ProjectLink from './ProjectLink';
import { ProjectData } from './types';

const ProjectLinks = ({
    githubUrl,
    githubRepo,
    packageName,
    packageUrl,
}: ProjectData) => (
  <div className="project-links">
    <ProjectLink IconComponent={RiGithubFill} href={githubUrl} label={githubRepo} />
    <ProjectLink IconComponent={RiNpmjsFill} href={packageUrl} label={packageName} />
  </div>
);

export default ProjectLinks;

