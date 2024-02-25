import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PageArticle from './components/PageArticle';
import { pages } from './data/pages';


function App() {
  const loadedPath = useLocation().pathname.slice(1);
  const effectivePage = loadedPath === '' ? pages.about : pages[loadedPath];
  const [activePage, setActivePage] = React.useState(
    loadedPath  !== '' ? pages[loadedPath] : pages.about);
  React.useEffect(() => {
    setActivePage(effectivePage);
  }, [effectivePage, setActivePage]);
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
        </Routes>
      </div>
    </main>
  );
}

export default App;
