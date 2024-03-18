import React from 'react';
import { useLocation } from 'react-router-dom';

import { pages } from '~/data/pages';


const useAppData = (): { activePage: string } => {
  const loadedPath = useLocation().pathname.slice(1);

  const effectivePage = loadedPath === '' ? pages.about : pages[loadedPath];

  const [activePage, setActivePage] = React.useState(
    loadedPath  !== '' ? pages[loadedPath] : pages.about);

  React.useEffect(() => {
    setActivePage(effectivePage);
  }, [effectivePage, setActivePage]);

  return { activePage };
}

export default useAppData;
