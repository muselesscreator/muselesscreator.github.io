import {
  vi,
  test,
  describe,
  expect,
} from 'vitest';
import { pages } from '~/data/pages';

import { shallow } from '@muselesscreator/react-shallow-snapshot';

import PageArticle, { articleComponents } from '.';

vi.mock('~/pages/About', () => ({ default: 'About' }));
vi.mock('~/pages/Contact', () => ({ default: 'Contact' }));
vi.mock('~/pages/Portfolio', () => ({ default: 'Portfolio' }));
vi.mock('~/pages/Resume', () => ({ default: 'Resume' }));
vi.mock('~/pages/Demos', () => ({ default: 'Demos' }));

describe('PageArticle component', () => {
  test('should render About page if activePage is about', () => {
    const el = shallow(<PageArticle activePage="about" />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance).toEqual(shallow(<articleComponents.about />).instance);
  });
  test('should render Contact page if activePage is contact', () => {
    const el = shallow(<PageArticle activePage="contact" />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance).toEqual(shallow(<articleComponents.contact />).instance);
  });
  test('should render Portfolio page if activePage is portfolio', () => {
    const el = shallow(<PageArticle activePage="portfolio" />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance).toEqual(shallow(<articleComponents.portfolio />).instance);
  });
  test('should render Resume page if activePage is resume', () => {
    const el = shallow(<PageArticle activePage="resume" />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance).toEqual(shallow(<articleComponents.resume />).instance);
  });
  test('should render Demos page if activePage is demos', () => {
    const el = shallow(<PageArticle activePage={pages.demo} />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance).toEqual(shallow(<articleComponents.demo />).instance);
  });
});

