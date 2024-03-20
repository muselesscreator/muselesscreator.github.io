import {
  test,
  describe,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';

import ContactItem, { ContactItemProps } from './ContactItem';

const testIcon = 'test-icon';
const props = {
  IconEl: (() => testIcon) as React.FC,
  title: 'test-title',
  href: 'test-href',
  value: 'test-value',
} as ContactItemProps;

describe('ContactItem', () => {
  test('renders correctly', () => {
    const el = shallow(<ContactItem {...props} />);
    expect(el.snapshot).toMatchSnapshot();
    console.log({ el });
    const [iconBox, contactInfo] = el.instance.children;
    expect(iconBox.children).toHaveLength(1);
    console.log({ iconBoxChildren: iconBox.children });
    expect(iconBox.children[0].el).toEqual(testIcon);
    expect(contactInfo.children).toHaveLength(2);
    expect(contactInfo.children[0].children[0].el).toEqual(props.title);
    expect(contactInfo.children[1].children[0].el).toEqual(props.value);
    expect(contactInfo.children[1].props.href).toEqual(props.href);
  });
});
