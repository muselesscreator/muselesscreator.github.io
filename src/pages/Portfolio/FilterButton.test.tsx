import {
  vi,
  describe,
  it,
  test,
  expect,
} from 'vitest';
import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';

import FilterButton from './FilterButton';

const onClick = vi.fn();
const props = {
  isActive: true,
  handleFilterChange: (filter: string) => {
    setMockName(onClick, `handleFilterChange(${filter})`);
    return onClick as () => void;
  },
  filter: 'Test Filter',
};

setMockName(props.handleFilterChange, 'props.onClick');

describe('FilterButton component', () => {
  test('active snapshot', () => {
    const el = shallow(<FilterButton {...props} />);
    expect(el.snapshot).toMatchSnapshot();
    const button = el.instance.findByType('button')[0];
    expect(button.props.className).toEqual('active');
    expect(button.props.onClick).toEqual(props.handleFilterChange(props.filter));
  });
  test('inactive snapshot', () => {
    const el = shallow(<FilterButton {...props} isActive={false} />);
    expect(el.snapshot).toMatchSnapshot();
    const button = el.instance.findByType('button')[0];
    expect(button.props.className).toEqual('');
    expect(button.props.onClick).toEqual(props.handleFilterChange(props.filter));
  });
});

