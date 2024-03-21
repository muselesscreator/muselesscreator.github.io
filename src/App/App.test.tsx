import {
  vi,
  describe,
  it,
  test,
  expect,
  Mock,
  beforeEach,
} from 'vitest';
import { shallow, ExplorerData } from '@muselesscreator/react-shallow-snapshot';

import useAppData from './useAppData';
import App, { routes } from '.';

vi.mock('./useAppData', () => ({ default: vi.fn() }));
vi.mock('~/components/Sidebar', () => ({ default: 'Sidebar' }));
vi.mock('~/components/Navbar', () => ({ default: 'Navbar' }));
vi.mock('~/components/PageArticle', () => ({ default: 'PageArticle' }));
vi.mock('react-router-dom', () => ({ Routes: 'Routes', Route: 'Route' }));

const hookProps = { activePage: 'test-page' };
(useAppData as Mock).mockReturnValue(hookProps);

let el: typeof ExplorerData;
describe('App', () => { 
  beforeEach(() => {
    el = shallow(<App />);
  });
  describe('behavior', () => {
    it('loads activePage from hooks', () => {
      expect(useAppData).toHaveBeenCalledWith();
    });
  });
  describe('output', () => {
    test('snapshot', () => {
      expect(el.snapshot).toMatchSnapshot();
    });
    it('renders a Sidebar component', () => {
      expect(el.instance.findByType('Sidebar')).toHaveLength(1);
    });
    it('renders Navbar with active page', () => {
      expect(el.instance.findByType('Navbar')[0].props.activePage).toBe(hookProps.activePage);
    });
    it('renders a Route for each route', () => {
      const routeEls = el.instance.findByType('Route');
      expect(routeEls).toHaveLength(routes.length);
      routes.forEach((route, i) => {
        expect(routeEls[i].props.path).toBe(route.path);
        expect(routeEls[i].props.element.type).toBe('PageArticle');
        expect(routeEls[i].props.element.props.activePage).toBe(route.page);
      });
    });
  });
});

