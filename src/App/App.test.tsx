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

vi.mock('react-router-dom', () => ({ Routes: 'Routes', Route: 'Route' }));
vi.mock('~/components/Sidebar', () => ({ default: 'Sidebar' }));
vi.mock('~/components/Navbar', () => ({ default: 'Navbar' }));
vi.mock('~/components/PageArticle', () => ({ default: 'PageArticle' }));
vi.mock('./useAppData', () => ({ default: vi.fn() }));

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
      routeEls.forEach((_: typeof ExplorerData, i: number) => {
        const { props } = routeEls[i];
        const element = props.element;
        expect(props.path).toBe(routes[i].path);
        expect(element.type).toBe('PageArticle');
        expect(element.props.activePage).toBe(routes[i].page);
      });
    });
  });
});

