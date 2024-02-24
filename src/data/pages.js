import { StrictDict } from '@muselesscreator/strict-dict';

export const pages = StrictDict({
  about: 'about',
  contact: 'contact',
  resume: 'resume',
  portfolio: 'portfolio',
  blog: 'blog',
});

export const pageNames = StrictDict({
  [pages.about]: 'About',
  [pages.contact]: 'Contact',
  [pages.resume]: 'Resume',
  [pages.portfolio]: 'Portfolio',
  [pages.blog]: 'Blog',
});

export default pages;
