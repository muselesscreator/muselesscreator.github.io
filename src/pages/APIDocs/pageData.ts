type APIProject = { description: string; title: string; url: string };
export const projects = [
  {
    description: 'A shallow snapshot testing utility for React',
    title: 'react-shallow-snapshot',
    url: 'https://musely.github.io/react-shallow-snapshot/',
  },
  {
    description: 'A key-safe object wrapper for JS',
    title: 'StrictDict',
    url: 'https://musely.github.io/strict-dict/',
  },
  {
    description: 'A more testable React hook for keyed state management',
    title: 'useKeyedState',
    url: 'https://musely.github.io/use-keyed-state/',
  },
] as APIProject[];
export default projects;
