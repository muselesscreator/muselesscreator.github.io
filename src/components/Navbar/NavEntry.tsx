import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { pageNames } from '~/data/pages';


export type NavEntryProps = {
  page: string;
  isActive: boolean;
};

const NavEntry = ({ page, isActive }: NavEntryProps) => (
  <li key={page} className="navbar-item">
    <NavLink
      className={classNames('navbar-link', { active: isActive })}
      to={`/${page}`}
    >
    {pageNames[page]}
    </NavLink>
  </li>
);

export default NavEntry;
