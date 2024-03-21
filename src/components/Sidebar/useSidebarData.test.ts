import React from 'react';
import{
  vi,
  describe,
  test,
  it,
  expect,
  Mock,
} from 'vitest';

import useSidebarData from './useSidebarData';

vi.mock('react', () => ({
  default: {
    useState: vi.fn(),
  },
}));

const setState = vi.fn();
(React.useState as Mock).mockReturnValue([false, setState]);

describe('useSidebarData', () => {
  describe('behavior', () => {
    it('initializes isActive to false', () => {
      useSidebarData();
      expect(React.useState).toHaveBeenCalledWith(false);
    });
  });
  describe('output', () => {
    it('returns isActive from state and a toggle method', () => {
      let out = useSidebarData();
      expect(out.isActive).toBe(false);
      out.toggle();
      expect(setState).toHaveBeenCalledWith(true);
      (React.useState as Mock).mockReturnValue([true, setState]);
      out = useSidebarData();
      expect(out.isActive).toBe(true);
      out.toggle();
      expect(setState).toHaveBeenCalledWith(false);
    });
  });
});
