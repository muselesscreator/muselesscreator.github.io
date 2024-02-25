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
  const [activePage, setActivePage] = React.useState(
    loadedPath ? pages[loadedPath] : pages.about);
  React.useEffect(() => {
    setActivePage(pages[loadedPath]);
  }, [loadedPath, setActivePage]);
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <PageArticle activePage={activePage} />
      </div>
    </main>
  );
}

export default App;
