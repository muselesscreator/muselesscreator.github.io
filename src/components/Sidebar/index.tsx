import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import contactInfo from '~/data/contact';

import useSidebarData from './useSidebarData';
import ContactList from './ContactList';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

const Sidebar = () => {
  const { isActive, toggle } = useSidebarData();
  return (
    <aside className={classNames('sidebar', { active: isActive })}>
      <div className="sidebar-info">
        <UserAvatar contactInfo={contactInfo} />
        <UserInfo contactInfo={contactInfo} />
        <button onClick={toggle} className="info_more-btn">
          <span>Show Contacts </span>
          <FaChevronDown />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ContactList contactInfo={contactInfo} />
      </div>
    </aside>
  );
};

export default Sidebar;
