import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PageArticle from './components/PageArticle';
import { pages } from './data/pages';


function App() {
  const [activePage, setActivePage] = React.useState(pages.about);
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar  activePage={activePage} setActivePage={setActivePage} />
        <PageArticle activePage={activePage} />
      </div>
    </main>
  );
}

export default App;
