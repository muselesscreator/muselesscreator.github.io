type ProjectLinkProps = {
  IconComponent: React.ComponentType,
  href?: string,
  label?: string,
};

const ProjectLink = ({
  IconComponent,
  href,
  label,
}: ProjectLinkProps) => (
  (href && label) && (
    <p>
      <IconComponent />: 
      <a href={href} target="_blank" className="project-link" rel="noopener noreferrer">
        {label}
      </a>
    </p>
  )
);

export default ProjectLink;

