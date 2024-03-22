import {
  vi,
  beforeEach,
  describe,
  expect,
  it,
  Mock,
} from 'vitest';

import useContactData, { stateKeys } from './useContactData';
import { useKeyedState } from '@muselesscreator/use-keyed-state';

vi.mock('@muselesscreator/use-keyed-state', () => ({
  useKeyedState: vi.fn(),
}));


const stateValues = {
  [stateKeys.fullname]: 'fullname',
  [stateKeys.email]: 'email',
  [stateKeys.message]: 'message',
};
const setState = {
  [stateKeys.fullname]: vi.fn(),
  [stateKeys.email]: vi.fn(),
  [stateKeys.message]: vi.fn(),
};
const initValues = {
  [stateKeys.fullname]: null,
  [stateKeys.email]: null,
  [stateKeys.message]: null,
} as Record<string, unknown>;

const mockUseKeyedState = (key: string, val: unknown): [string, () => void] => {
  initValues[key] = val;
  return [stateValues[key], setState[key]];
};
(useKeyedState as Mock).mockImplementation(mockUseKeyedState);

describe('useContactData hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe('behavior', () => { 
    it('initializes fullname, email, and message to empty strings', () => {
      useContactData();
      expect(initValues[stateKeys.fullname]).toBe('');
      expect(initValues[stateKeys.email]).toBe('');
      expect(initValues[stateKeys.message]).toBe('');
    });
  });
  describe('output', () => {
    it('returns fullname, email, message, and formAction', () => {
      const { fullname, email, message } = useContactData();
      expect(fullname).toBe(stateValues[stateKeys.fullname]);
      expect(email).toBe(stateValues[stateKeys.email]);
      expect(message).toBe(stateValues[stateKeys.message]);
    });
    it('returns invalid if any of name, email or message are empty', () => {
      const clearStateValues = () => {
        stateValues[stateKeys.fullname] = '';
        stateValues[stateKeys.email] = '';
        stateValues[stateKeys.message] = '';
      }
      clearStateValues();
      stateValues[stateKeys.fullname] = 'fullname';
      expect(useContactData().isValid).toBe(false);
      clearStateValues();
      stateValues[stateKeys.email] = 'email';
      expect(useContactData().isValid).toBe(false);
      clearStateValues();
      stateValues[stateKeys.message] = 'message';
      expect(useContactData().isValid).toBe(false);
    });
    it('returns valid if none of fullname email or message are empty', () => {
      stateValues[stateKeys.fullname] = 'fullname';
      stateValues[stateKeys.email] = 'email';
      stateValues[stateKeys.message] = 'message';
      expect(useContactData().isValid).toBe(true);
    });
    it('returns a function to set fullname, email, and message', () => {
      const {
        handleNameChange, 
        handleEmailChange,
        handleMessageChange,
      } = useContactData();
      const inputEvent = (val: string) => ({ target: { value: val } });
      handleNameChange(inputEvent('fullname'));
      handleEmailChange(inputEvent('email'));
      handleMessageChange(inputEvent('message'));
      expect(setState[stateKeys.fullname]).toHaveBeenCalledWith('fullname');
      expect(setState[stateKeys.email]).toHaveBeenCalledWith('email');
      expect(setState[stateKeys.message]).toHaveBeenCalledWith('message');
    });
  });
});
