import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';

import { pages } from '~/data/pages';

import NavBar, { PAGE_ORDER } from '.';
import { NavEntryProps } from './NavEntry';

vi.mock('./NavEntry', () => ({ default: 'NavEntry' }));

type NavEntry = {
  props: NavEntryProps;
};

describe('NavBar component', () => {
  test('about page snapshot', () => {
    const wrapper = shallow(<NavBar  activePage={pages.about} />);
    expect(wrapper.snapshot).toMatchSnapshot();
  });
  describe('Nav entries (all should be included, and activePage should be active)', () => {
    PAGE_ORDER.forEach((page) => {
      test(page, () => {
        const wrapper = shallow(<NavBar  activePage={pages[page]} />);
        const navEntries = wrapper.instance.findByType('NavEntry');
        expect(navEntries).toHaveLength(PAGE_ORDER.length);
        navEntries.forEach((navEntry: NavEntry, index: number) => {
          expect(navEntry.props).toEqual({
            page: pages[PAGE_ORDER[index]],
            isActive: pages[PAGE_ORDER[index]] === pages[page],
          });
        });
      });
    });
  });
});
