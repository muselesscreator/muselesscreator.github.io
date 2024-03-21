import {
  describe,
  test,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';
import contactInfo from '~/data/contact';

import UserAvatar from './UserAvatar';

describe('UserAvatar component', () => {
  test('snapshot includes user avatar', () => {
    const el = shallow(<UserAvatar />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance.findByType('img')[0].props.src).toBe(contactInfo.avatar);
  });
});
