import 'react';
import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';
import { shallow } from '@muselesscreator/react-shallow-snapshot';
import ProjectLink from './ProjectLink';

vi.mock('react-icons/fa', () => ({ FaEye: 'FaEyeIcon' }));

const props = {
  IconComponent: () => <div>IconComponent</div>,
  href: 'test-href',
  label: 'Test Label',
};
describe('ProjectLink', () => {
  test('snapshot', () => {
    const el = shallow(<ProjectLink  {...props} />);
    expect(el.snapshot).toMatchSnapshot();
    const { children } = el.instance.findByType('p')[0];
    const expected = props.IconComponent();
    expect(children[0].matches(expected)).toBe(true);
    const link = el.instance.findByType('a')[0];
    expect(link.props.href).toBe(props.href);
    expect(link.children[0].el).toBe(props.label);
  });
});
