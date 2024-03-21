import {
  vi,
  describe,
  it,
  test,
  expect,
  Mock,
} from 'vitest';
import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';

import useContactData, from './useContactData';

import Contact from '.';

vi.mock('./useContactData', () => ({ default: vi.fn() }));
vi.mock('@mui/icons-material/Send', () => ({ default: 'SendIcon' }));

const hookProps = {
  fullname: 'Test Full Name',
  email: 'testEmail@google.com',
  message: 'This is a message for testing purposes',
  isValid: true,
  handleNameChange: vi.fn(),
  handleEmailChange: vi.fn(),
  handleMessageChange: vi.fn(),
};
setMockName(hookProps.handleNameChange, 'hookProps.handleNameChange');
setMockName(hookProps.handleEmailChange, 'hookProps.handleEmailChange');
setMockName(hookProps.handleMessageChange, 'hookProps.handleMessageChange');

const invalidHookProps = {
  ...hookProps,
  isValid: false,
  fullname: '',
  email: '',
  message: '',
};
(useContactData as Mock).mockReturnValue(hookProps);

describe('Contact page', () => { 
  describe('behavior', () => { 
    it('loads contact data from hook', () => {
      shallow(<Contact />);
      expect(useContactData).toHaveBeenCalled();
    });
  });
  describe('output', () => {
    test('snapshot', () => {
      const el = shallow(<Contact />);
      expect(el.snapshot).toMatchSnapshot();
    });
    it('provides inputs for name and email, and a textarea for a message', () => {
      const el = shallow(<Contact />);
      const inputProps = el.instance.findByType('input')
        .map((input: { props: Record<string, string> }) => input.props);
      const textareaProps = el.instance.findByType('textarea')[0].props;
      expect(inputProps[0].value).toBe(hookProps.fullname)
      expect(inputProps[1].value).toBe(hookProps.email)
      expect(textareaProps.value).toBe(hookProps.message)
      expect(inputProps[0].onChange).toBe(hookProps.handleNameChange)
      expect(inputProps[1].onChange).toBe(hookProps.handleEmailChange)
      expect(textareaProps.onChange).toBe(hookProps.handleMessageChange)
      expect(inputProps[0].type).toBe('text');
      expect(inputProps[1].type).toBe('email');
    });
    test('invalid (empty) snapshot (disables submit button', () => {
      (useContactData as Mock).mockReturnValue(invalidHookProps);
      const el = shallow(<Contact />);
      expect(el.snapshot).toMatchSnapshot();
      expect(el.instance.findByType('button')[0].props.disabled).toBe(true);
      const inputProps = el.instance.findByType('input')
        .map((input: { props: Record<string, string> }) => input.props);
      const textareaProps = el.instance.findByType('textarea')[0].props;
      expect(inputProps[0].value).toBe('')
      expect(inputProps[1].value).toBe('')
      expect(textareaProps.value).toBe('')
      expect(inputProps[0].onChange).toBe(hookProps.handleNameChange)
      expect(inputProps[1].onChange).toBe(hookProps.handleEmailChange)
      expect(textareaProps.onChange).toBe(hookProps.handleMessageChange)
    });
  });
});
