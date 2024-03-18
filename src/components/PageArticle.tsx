import 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Demos from '../pages/Demos';
import { pages } from '../data/pages';

const articleComponents = {
  [pages.about]: About,
  [pages.contact]: Contact,
  [pages.portfolio]: Portfolio,
  [pages.resume]: Resume,
  [pages.demo]: Demos,
};

const PageArticle = ({ activePage }: { activePage: string }) => {
  const ArticleComponent = articleComponents[activePage];
  return (<ArticleComponent />);
};

export default PageArticle;
