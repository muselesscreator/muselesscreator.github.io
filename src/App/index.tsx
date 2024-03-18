import { Routes, Route } from 'react-router-dom';


import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import PageArticle from '~/components/PageArticle';
import { pages } from '~/data/pages';

import useAppData from './useAppData';
import './App.scss';


function App() {
  const { activePage } = useAppData();
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} />
        <Routes>
          <Route path="/" element={<PageArticle activePage={pages.about} />} />
          <Route path="/about" element={<PageArticle activePage={pages.about} />} />
          <Route path="/resume" element={<PageArticle activePage={pages.resume} />} />
          <Route path="/portfolio" element={<PageArticle activePage={pages.portfolio} />} />
          <Route path="/contact" element={<PageArticle activePage={pages.contact} />} />
          <Route path="/demo" element={<PageArticle activePage={pages.demo} />} />
          <Route path="/blog" element={<PageArticle activePage={pages.blog} />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
