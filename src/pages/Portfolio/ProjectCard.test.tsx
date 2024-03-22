import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';
import { shallow } from '@muselesscreator/react-shallow-snapshot';
import ProjectCard, { classNames } from './ProjectCard';

vi.mock('react-icons/fa', () => ({ FaEye: 'FaEyeIcon' }));

const project = {
  title: 'Project Title',
  description: 'Project Description',
  category: 'Project Category',
  githubUrl: 'github-url',
  githubRepo: 'github-repo',
  projectUrl: 'project-url',
};

describe('ProjectCard', () => {
  test('snapshot', () => {
    const el = shallow(<ProjectCard  {...project} />);
    expect(el.snapshot).toMatchSnapshot();
    const iconBox = el.instance.findByClassName(classNames.iconBox)[0];
    const title = el.instance.findByClassName(classNames.title)[0];
    const category = el.instance.findByClassName(classNames.category)[0];
    expect(iconBox.findByType('p')[0].children[0].el).toEqual(project.description);
    expect(title.children[0].el).toEqual(project.title);
    expect(category.children[0].el).toEqual(project.category);
  });
});
