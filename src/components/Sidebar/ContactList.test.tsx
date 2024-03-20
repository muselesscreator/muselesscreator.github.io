import {
  vi,
  test,
  describe,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';
import ContactItem from './ContactItem';

import ContactList, { fields } from './ContactList';

vi.mock('./ContactItem', () => ({ default: 'ContactItem' }));
vi.mock('react-icons/fa', () => ({
  FaEnvelope: 'FaEnvelopeIcon',
  FaLinkedin: 'FaLinkedinIcon',
  FaGithub: 'FaGithubIcon',
}));
vi.mock('react-icons/fa6', () => ({
  FaPhone: 'FaPhoneIcon',
}));

describe('ContactList', () => {
  test('renders correctly', () => {
    const el = shallow(<ContactList />);
    expect(el.snapshot).toMatchSnapshot();
  });
  test('contains correct fields for each contact', () => {
    const el = shallow(<ContactList />);
    const items = el.instance.findByType(ContactItem);
    expect(items.length).toBe(fields.length);
    fields.forEach((fieldDef, index) => {
      const field = items[index];
      expect(field.props).toEqual(fieldDef);
    });
  });
});
