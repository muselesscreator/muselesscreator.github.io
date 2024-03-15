import React from 'react';

import { demos } from './demos/index';
import Demo from './types';

const useDemosData = () => {
  const [loadedDemo, setLoadedDemo] = React.useState<Demo>(demos[0]);
  const handleDemoChange = (demo: Demo) => () => {
    setLoadedDemo(demo)
  };
  const { Element } = loadedDemo;
  const demoObj = demos.reduce((acc, demo) => ({
    ...acc,
    [demo.title]: demo,
  }), {}) as Record<string, Demo>;
  const demoOptions = demos.map(demo => ({ value: demo.title, label:  demo.title }));
  const setDemoByTitle = (value: string) => setLoadedDemo(demoObj[value]);
  return {
    loadedDemo,
    handleDemoChange,
    Element,
    demoOptions,
    setDemoByTitle,
  };
};

export default useDemosData;
