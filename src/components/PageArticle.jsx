import 'react';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Demos from '../pages/Demos';
import { pages, pageNames } from '../data/pages';

const articleComponents = {
  [pages.about]: About,
  [pages.blog]: Blog,
  [pages.contact]: Contact,
  [pages.portfolio]: Portfolio,
  [pages.resume]: Resume,
  [pages.demo]: Demos,
};

const PageArticle = ({ activePage }) => {
  const ArticleComponent = articleComponents[activePage];
  return (<ArticleComponent />);
};

export default PageArticle;