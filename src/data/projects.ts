import oraGradingImg from '../assets/oraGrading.png';
import gradebookImg from '../assets/gradebook.png';
import learnerDashboardImg from '../assets/learnerDashboard.png';
import oraImg from '../assets/ora.png';

import { StrictDict } from '@muselesscreator/strict-dict';
type ProjectData = {
  title: string;
  description: string;
  category: string;
  githubUrl: string;
  githubRepo: string;
  packageName?: string;
  packageUrl?: string;
  screenshots?: string[];
  details?: string;
  image?: string;
  projectUrl: string;
};

export const ProjectCategories = StrictDict({
  openSource: 'Open Source Contributions',
  public: 'Public Packages',
  all: 'All',
}) as Record<string, string>;

const projects: ProjectData[] = [
  {
    title: 'EdX Gradebook App Re-Architecture',
    description: 'Grade management app for EdX Course Staff',
    category: ProjectCategories.openSource,
    githubUrl: 'https://www.github.com/openedx/frontend-app-gradebook',
    githubRepo: 'openedx/frontend-app-gradebook',
    packageName: '@edx/frontend-app-gradebook',
    packageUrl: 'npmjs.com/package/@edx/frontend-app-gradebook',
    details: 'I led a team effort to update and fully re-architect the old Gradebook app with modern React practices and added theme-ability and test coverage.',
    image: gradebookImg,
    projectUrl: 'https://www.github.com/openedx/frontend-app-gradebook',
  },
  {
    title: 'EdX Open Response Assessment Staff Grader',
    description: 'Staff-Grading tool for EdX short-answer and file-submission questions',
    category: ProjectCategories.openSource,
    githubUrl: 'https://www.github.com/openedx/frontend-app-ora-grading',
    githubRepo: 'openedx/frontend-app-ora-grading',
    packageName: '@edx/frontend-app-ora-grading',
    packageUrl: 'npmjs.com/package/@edx/frontend-app-ora-grading',
    details: 'Served as Technical Lead for the development of a new grading interface which drastically reduced the time, effort, and frustration involved in grading of one of the most-used problem types in the system.  Ensured a bug-free release of code with 100% test coverage.',
    image: oraGradingImg,
    projectUrl: 'https://www.github.com/openedx/frontend-app-ora-grading',
  },
  {
    title: 'EdX Learner Home Redesign',
    description: 'Landing page for learner course listings',
    category: ProjectCategories.openSource,
    githubUrl: 'https://www.github.com/openedx/frontend-app-learner-dashboard',
    githubRepo: 'openedx/frontend-app-learner-dashboard',
    packageName: '@edx/frontend-app-learner-dashboard',
    packageUrl: 'npmjs.com/package/@edx/frontend-app-learner-dashboard',
    details: `Served as Technical Lead and Project Manager for redesign of the Learner Home web interface (logged-in learner’s course listing page).  The new experience is faster to load, more configurable, more theme-able, and fully internationalized, while providing a much easier interface for adding revenue-significant upsell interfaces (suggested courses, upsell links, “where to go from here?”)`,
    image: learnerDashboardImg,
    projectUrl: 'https://www.github.com/openedx/frontend-app-learner-dashboard',
  },
  {
    title: 'EdX Open Response Assessment Learning Block Redesign',
    description: 'Learning block for all short-answer and file-submission questions',
    category: ProjectCategories.openSource,
    githubUrl: 'https://www.github.com/openedx/frontend-app-ora',
    githubRepo: 'openedx/frontend-app-ora',
    packageName: '@edx/frontend-app-ora',
    packageUrl: 'npmjs.com/package/@edx/frontend-app-ora',
    details: 'Served as Technical Lead and Project Manager for the full redesign of theOpen Response Assessment learning block, migrating legacy (backboneJS/jquery) experience to a modern experience using React and theme-able componentry.',
    image: oraImg,
    projectUrl: 'https://www.github.com/openedx/frontend-app-ora',
  },
];

export default projects;
