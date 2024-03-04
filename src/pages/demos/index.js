import DiceSpinners from './DiceSpinners';
import KeyRoll from './KeyRoll';
import SchoolData from './SchoolData';
import SchoolCards from './SchoolCards';

export const demos = [
  {
    title: 'School Data Graphs (d3)',
    description: 'Small set of graphs using d3.js to visualize data from Boston Public Schools csv.',
    purpose: 'demonstrate proficiency with data visualization and graphicng with custom from-scratch d3.js graphs.',
    technologies: ['d3.js', 'svg', 'csv', 'react'],
    Element: SchoolData,
  },
  {
    title: 'Schools Paginated Directory',
    description: 'A home-page style layout for boston public schools data.',
    purpose: 'demonstrate proficiency with generating sort/filterable displays from data',
    technologies: ['react'],
    Element: SchoolCards,
  },
  {
    title: 'Dice Spinners',
    description: 'A simple dice roller with a visual spinner for each standard die size.',
    purpose: 'provide an accessible alternative to traditional dice roller for a friend with visual processing issues.',
    technologies: ['html5', 'react'],
    Element: DiceSpinners,
  },
  {
    title: 'Keyboard Roll',
    description: 'Simple midi keyboard roll',
    purpose: 'provide a fun/simple musical instrument for my son to play on an ipad',
    technologies: ['html5', 'react', 'react-sounds-midi',],
    Element: KeyRoll,
  },
];
export default demos;
