import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

import { ContactInfo } from '~/data/contact';

import ContactItem from './ContactItem';

type ContactListProps = {
  contactInfo: ContactInfo;
}

const ContactList = ({ contactInfo }: ContactListProps) => {
  const fields = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phoneRaw}`,
    },
    {
      icon: <FaGithub />,
      title: 'Github',
      value: contactInfo.github,
      href: contactInfo.github,
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: contactInfo.linkedIn,
      href: contactInfo.linkedIn,
    },
  ];

  return (
    <ul className="contacts-list">
      {fields.map((field) => (
        <ContactItem key={field.title} {...field} />
      ))}
    </ul>
  );
};

export default ContactList;
