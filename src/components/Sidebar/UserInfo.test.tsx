import {
  describe,
  test,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';
import contactInfo from '~/data/contact';

import UserInfo from './UserInfo';

describe('UserInfo component', () => {
  test('snapshot includes user name and title', () => {
    const el = shallow(<UserInfo />);
    expect(el.snapshot).toMatchSnapshot();
    expect(el.instance.findByType('h1')[0].children[0].el).toEqual(contactInfo.name);
    expect(el.instance.findByType('p')[0].children[0].el).toEqual(contactInfo.title);
  });
});
