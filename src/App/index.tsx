import { Routes, Route } from 'react-router-dom';


import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import PageArticle from '~/components/PageArticle';
import { pages } from '~/data/pages';

import useAppData from './useAppData';
import './App.scss';


export const routes = [
  { path: '/', page: pages.about },
  { path: '/about', page: pages.about },
  { path: '/resume', page: pages.resume },
  { path: '/portfolio', page: pages.portfolio },
  { path: '/contact', page: pages.contact },
  { path: '/demo', page: pages.demo },
  { path: '/blog', page: pages.blog },
];

export const App = () => {
  const { activePage } = useAppData();
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} />
        <Routes>
          {routes.map(({ path, page }) => (
            <Route key={path} path={path} element={<PageArticle activePage={page} />} />
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default App;
