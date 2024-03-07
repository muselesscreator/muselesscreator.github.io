import React from 'react';
import classNames from 'classnames';
// import { Image } from 'react-bootstrap';
import {
  FaEnvelope,
  FaLinkedin,
  FaChevronDown,
  FaGithub,
} from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import contactInfo from '../data/contact';

const Sidebar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const toggle = () => setIsActive(!isActive);
  return (
    <aside className={classNames('sidebar', { active: isActive })}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={contactInfo.avatar} alt={contactInfo.name} width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title={contactInfo.name}>{contactInfo.name}</h1>
          <p className="title">{contactInfo.title}</p>
        </div>
        <button onClick={toggle} className="info_more-btn">
          <span>Show Contacts </span>
          <FaChevronDown />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${contactInfo.phoneRaw}`}  className="contact-link">{contactInfo.phone}</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href={contactInfo.github}  className="contact-link">{contactInfo.github}</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href={contactInfo.linkedIn}  className="contact-link">{contactInfo.linkedIn}</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
