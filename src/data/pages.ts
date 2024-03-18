import { StrictDict } from '@muselesscreator/strict-dict';

export const pages = StrictDict({
  about: 'about',
  contact: 'contact',
  resume: 'resume',
  portfolio: 'portfolio',
  demo: 'demo',
  blog: 'blog',
}) as Record<string, string>;

export const pageNames = StrictDict({
  [pages.about]: 'About',
  [pages.contact]: 'Contact',
  [pages.resume]: 'Resume',
  [pages.portfolio]: 'Portfolio',
  [pages.blog]: 'Blog',
  [pages.demo]: 'Demos',
}) as Record<string, string>;

export default pages;
