import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  vi,
  describe,
  beforeEach,
  expect,
  it,
  Mock,
} from 'vitest';

import { pages } from '~/data/pages';
import useAppData from './useAppData';

vi.mock('react', () => ({
  default: {
    useState: vi.fn(),
    useEffect: vi.fn(),
  },
}));

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
}));

const setActivePage = vi.fn();
const mockState = (val?: string) => (React.useState as Mock).mockReturnValue([val, setActivePage]);

const mockLocation = (pathname: string) => {
  (useLocation as Mock).mockReturnValue({ pathname });
};

describe('useAppData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe('behavior', () => {
    it('should initialize activePage to about if no path is provided', () => {
      mockLocation('/');
      mockState(undefined);
      useAppData();
      expect(React.useState).toHaveBeenCalledWith(pages.about);
    });
    it('should initialize activePage to the page matching the path', () => {
      mockLocation(`/${pages.contact}`);
      mockState(undefined);
      useAppData();
      expect(React.useState).toHaveBeenCalledWith(pages.contact);
    });
    describe('update effect', () => { 
      it('should update activePage to about page when the path changes to empty', () => {
        mockLocation('/');
        mockState(undefined);
        useAppData();
        expect(React.useEffect).toHaveBeenCalled();
        const effect = (React.useEffect as Mock).mock.calls[0][0];
        effect();
        expect(setActivePage).toHaveBeenCalledWith(pages.about);
      });
      it('should update activePage page when the path changes', () => {
        mockLocation(`/${pages.portfolio}`);
        mockState(undefined);
        useAppData();
        expect(React.useEffect).toHaveBeenCalled();
        const effect = (React.useEffect as Mock).mock.calls[0][0];
        effect();
        expect(setActivePage).toHaveBeenCalledWith(pages.portfolio);
      });
    });
  });
  describe('output', () => {
    it('should return activePage', () => {
      mockLocation('/');
      mockState(pages.about);
      const { activePage } = useAppData();
      expect(activePage).toBe(pages.about);
    });
  });
});
