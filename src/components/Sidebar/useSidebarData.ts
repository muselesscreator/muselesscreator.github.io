import React from 'react';

const useSidebarData = () => {
  const [isActive, setIsActive] = React.useState(false);
  const toggle = () => setIsActive(!isActive);
  return {
    isActive,
    toggle,
  };
};

export default useSidebarData;
