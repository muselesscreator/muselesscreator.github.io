import 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { pages, pageNames } from '../data/pages';


const Navbar = ({ activePage }) => {
  const navEntry = (page) => {
    return (
      <li key={page} className="navbar-item">
        <NavLink
          className={classNames('navbar-link', { active: activePage === page })}
          to={`/${page}`}
          onClick={() => setActivePage(page)}
        >
        {pageNames[page]}
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navEntry(pages.about)}
        {navEntry(pages.resume)}
        {navEntry(pages.portfolio)}
        {/*navEntry(pages.blog)*/}
        {navEntry(pages.contact)}
      </ul>
    </nav>
  );
};

export default Navbar;
