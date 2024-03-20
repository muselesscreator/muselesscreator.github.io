import { pages } from '~/data/pages';
import NavEntry from './NavEntry';


export const PAGE_ORDER = [
  pages.about,
  pages.resume,
  pages.portfolio,
  // pages.blog,
  pages.demo,
  pages.contact,
];

const Navbar = ({ activePage }: { activePage: string }) => (
  <nav className="navbar">
    <ul className="navbar-list">
      {PAGE_ORDER.map((page) => (
        <NavEntry key={page} page={page} isActive={activePage === page} />
      ))}
    </ul>
  </nav>
);

export default Navbar;
