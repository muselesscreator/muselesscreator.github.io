import { FaEye } from 'react-icons/fa';

import { StrictDict } from '@muselesscreator/strict-dict';

import { ProjectData } from './types';


export const classNames = StrictDict({
  img: 'project-img',
  iconBox: 'project-item-icon-box',
  title: 'project-title',
  category: 'project-category',
}) as Record<string, string>;

const ProjectCard = ({
  title,
  description,
  category,
  image,
  projectUrl,
}: ProjectData) => (
  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
    <figure className={classNames.img}>
      <div className={classNames.iconBox}>
        <p>{description}</p>
        <FaEye />
      </div>
      <img src={image} alt={title} loading="lazy" />
    </figure>
    <h4 className={classNames.title}>{title}</h4>
    <p className={classNames.category}>{category}</p>
  </a>
);

export default ProjectCard;

