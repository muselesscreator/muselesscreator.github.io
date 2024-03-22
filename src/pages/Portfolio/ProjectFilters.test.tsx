import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';
import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';
import FilterButton from './FilterButton';
import ProjectFilters, {
  filterOptions,
  categories,
} from './ProjectFilters';

vi.mock('./FilterButton', () => ({ default: 'FilterButton' }));
vi.mock('~/components/Select', () => ({ default: 'Select' }));

const props = {
  projectFilter: categories[0],
  handleCategoryChange: vi.fn(),
  handleFilterChange: vi.fn(),
};
setMockName(props.handleCategoryChange, 'props.handleCategoryChange');
setMockName(props.handleFilterChange, 'props.handleFilterChange');

describe('ProjetFilters component', () => {
  test('snapshot', () => {
    const el = shallow(<ProjectFilters {...props} />);
    expect(el.snapshot).toMatchSnapshot();
    const filterButtons = el.instance.findByType(FilterButton);
    const select = el.instance.findByType('Select')[0];
    expect(filterButtons).toHaveLength(filterOptions.length);
    expect(filterButtons[0].props).toEqual({
      isActive: true,
      handleFilterChange: props.handleCategoryChange,
      filter: categories[0],
    });
    expect(filterButtons[1].props).toEqual({
      isActive: false,
      handleFilterChange: props.handleCategoryChange,
      filter: categories[1],
    });
    expect(filterButtons[2].props).toEqual({
      isActive: false,
      handleFilterChange: props.handleCategoryChange,
      filter: categories[2],
    });
    expect(select.props).toEqual({
      label: 'Select category',
      options: filterOptions,
      value: props.projectFilter,
      handleChange: props.handleFilterChange,
    });
  });
});
