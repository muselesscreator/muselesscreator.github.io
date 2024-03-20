import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

import contactInfo from '~/data/contact';

import ContactItem from './ContactItem';

export const fields = [
  {
    IconEl: FaEnvelope,
    title: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    IconEl: FaPhone,
    title: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phoneRaw}`,
  },
  {
    IconEl: FaGithub,
    title: 'Github',
    value: contactInfo.github,
    href: contactInfo.github,
  },
  {
    IconEl: FaLinkedin,
    title: 'LinkedIn',
    value: contactInfo.linkedIn,
    href: contactInfo.linkedIn,
  },
];
const ContactList = () => (
  <ul className="contacts-list">
    {fields.map((field) => (
      <ContactItem key={field.title} {...field} />
    ))}
  </ul>
);

export default ContactList;
