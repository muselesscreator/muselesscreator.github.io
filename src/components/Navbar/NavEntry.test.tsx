import {
  vi,
  beforeEach,
  test,
  describe,
  expect,
} from 'vitest';

import {
  shallow,
  ExplorerData,
} from '@muselesscreator/react-shallow-snapshot';

import { pages } from '~/data/pages';
import NavEntry from './NavEntry';

vi.mock('react-router-dom', () => ({
  NavLink: 'NavLink',
}));

let el: typeof ExplorerData;
describe('NavEntry component', () => {
  describe('active entry', () => {
    beforeEach(() => {
      el = shallow(<NavEntry page={pages.about} isActive />);
    });
    test('snapshot', () => {
      expect(el.snapshot).toMatchSnapshot();
    });
    test('contains active navlink to page', () => {
      const navLink = el.instance.findByType('NavLink')[0];
      expect(navLink.props.className).toContain('active');
      expect(navLink.props.to).toBe(`/${pages.about}`);
    });
  });
  describe('inactive entry', () => {
    beforeEach(() => {
      el = shallow(<NavEntry page={pages.about} isActive={false} />);
    });
    test('snapshot', () => {
      expect(el.snapshot).toMatchSnapshot();
    });
    test('contains navlink to page', () => {
      const navLink = el.instance.findByType('NavLink')[0];
      expect(navLink.props.className).not.toContain('active');
      expect(navLink.props.to).toBe(`/${pages.about}`);
    });
  });
});
