import 'react';
import classNames from 'classnames';
import { pages, pageNames } from '../data/pages';


const Navbar = ({ activePage, setActivePage }) => {

  console.log({ activePage });
  const navEntry = (page) => {
    console.log({ page, activePage });
    return (
      <li key={page} className="navbar-item">
        <button
          className={classNames('navbar-link', { active: activePage === page })}
          onClick={() => setActivePage(page)}
        >
        {pageNames[page]}
        </button>
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
