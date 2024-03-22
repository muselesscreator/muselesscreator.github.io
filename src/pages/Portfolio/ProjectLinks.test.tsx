import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';
import { shallow } from '@muselesscreator/react-shallow-snapshot';
import ProjectLinks from './ProjectLinks';

vi.mock('./ProjectLink', () => ({ default: 'ProjectLink' }));
vi.mock('react-icons/ri', () => ({
  RiNpmjsFill: 'RiNpmjsFillIcon',
  RiGithubFill: 'RiGithubFillIcon',
}));

const project = {
  title: 'Project Title',
  description: 'Project Description',
  category: 'Project Category',
  githubUrl: 'github-url',
  githubRepo: 'github-repo',
  projectUrl: 'project-url',
  packageName: 'package-name',
  packageUrl: 'package-url',
};

describe('ProjectLinks', () => {
  test('snapshot', () => {
    const el = shallow(<ProjectLinks {...project} />);
    expect(el.snapshot).toMatchSnapshot();
    const links = el.instance.findByType('ProjectLink');
    expect(links).toHaveLength(2);
    expect(links[0].props.href).toBe(project.githubUrl);
    expect(links[0].props.label).toBe(project.githubRepo);
    expect(links[1].props.href).toBe(project.packageUrl);
    expect(links[1].props.label).toBe(project.packageName);
  });
});
