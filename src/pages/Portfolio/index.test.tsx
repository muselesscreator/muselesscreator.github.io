import {
  beforeEach,
  vi,
  it,
  test,
  describe,
  expect,
  Mock,
} from 'vitest';
import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';

import usePortfolioData from './usePortfolioData';
import Portfolio from '.';

vi.mock('./ProjectCard', () => ({ default: 'ProjectCard' }));
vi.mock('./ProjectLinks', () => ({ default: 'ProjectLinks' }));
vi.mock('./ProjectFilters', () => ({ default: 'ProjectFilters' }));
vi.mock('./usePortfolioData', () => ({ default: vi.fn() }));

const hookProps = {
  projectFilter: 'test-project-filter',
  handleCategoryChange: vi.fn(),
  handleFilterChange: vi.fn(),
  filteredProjects: [
    { title: 'project1-title', type: 'project1-type', value: 'project1-value' },
    { title: 'project2-title', type: 'project2-type', value: 'project2-value' },
    { title: 'project3-title', type: 'project3-type', value: 'project3-value' },
  ],
};
setMockName(hookProps.handleCategoryChange, 'hookProps.handleCategoryChange');
setMockName(hookProps.handleFilterChange, 'hookProps.handleFilterChange');

(usePortfolioData as Mock).mockReturnValue(hookProps);

let el: any;
describe('Portfolio page', () => {
  beforeEach(() => {
    el = shallow(<Portfolio  />);
  });
  test('snapshot', () => {
    expect(el.snapshot).toMatchSnapshot();
  });
  it('displays ProjectFilters', () => {
    const filtersEl = el.instance.findByType('ProjectFilters')[0];
    expect(filtersEl.props).toEqual({
      projectFilter: hookProps.projectFilter,
      handleCategoryChange: hookProps.handleCategoryChange,
      handleFilterChange: hookProps.handleFilterChange,
    });
  });
  it('displays filtered projects with cards and links', () => {
    const items = el.instance.findByClassName('project-item active');
    expect(items).toHaveLength(hookProps.filteredProjects.length);
    items.forEach((item: any, index: number) => {
      const card = item.findByType('ProjectCard')[0];
      expect(card.props).toEqual(hookProps.filteredProjects[index]);
      const links = item.findByType('ProjectLinks')[0];
      expect(links.props).toEqual(hookProps.filteredProjects[index]);
    });
  });
});
