import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Portfolio from '~/pages/Portfolio';
import Resume from '~/pages/Resume';
import Demos from '~/pages/Demos';
import APIDocs from '~/pages/APIDocs';
import { pages } from '~/data/pages';

export const articleComponents = {
  [pages.about]: About,
  [pages.contact]: Contact,
  [pages.portfolio]: Portfolio,
  [pages.resume]: Resume,
  [pages.demo]: Demos,
  [pages.api]: APIDocs,
};

const PageArticle = ({ activePage }: { activePage: string }) => {
  const ArticleComponent = articleComponents[activePage];
  return (<ArticleComponent />);
};

export default PageArticle;
