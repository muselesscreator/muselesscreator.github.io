import 'react';
import { v4 as uuid } from 'uuid';
import {
  beforeEach,
  describe,
  test,
  expect,
  vi,
} from 'vitest';
import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';

import Select from '.';
import useSelectData from './useSelectData';

vi.mock('@mui/material/FormControl', () => ({ default: 'FormControl' }));
vi.mock('@mui/material/InputLabel', () => ({ default: 'InputLabel' }));
vi.mock('@mui/material/Select', () => ({ default: 'MuiSelect' }));
vi.mock('@mui/material/MenuItem', () => ({ default: 'MenuItem' }));

vi.mock('uuid', () => ({ v4: () => 'test-uuid' }));
vi.mock('./useSelectData', () => ({ default: vi.fn() }));


const props = {
  label: 'test-label',
  value: 'test-value-1',
  options: [
    { value: 'test-value1', label: 'Test label1' },
    { value: 'test-value2', label: 'Test label2' },
    { value: 'test-value3', label: 'Test label3' },
  ],
  handleChange: vi.fn(),
  multiple: 'test-multiple',
}
const hookProps = {
  labelId: 'test-label-id',
  inputId: 'test-input-id',
  onChange: vi.fn(),
};
useSelectData.mockReturnValue(hookProps);
setMockName(props.handleChange, 'props.handleChange');
setMockName(hookProps.onChange, 'hookProps.onChange');
describe('Select component', () => {
  let el;
  let instance;
  let els;
  beforeEach(() => {
    vi.clearAllMocks();
    el = shallow(<Select {...props} />);
    instance = el.instance;
    els = {
      FormControl: instance.findByType('FormControl')[0],
      InputLabel: instance.findByType('InputLabel')[0],
      MuiSelect: instance.findByType('MuiSelect')[0],
      MenuItem: instance.findByType('MenuItem')[0],
    };
  }); 
  describe('render', () => {
    test('snapshot', () => {
      expect(el.snapshot).toMatchSnapshot();
    });
    test('render form control with children', () => {
      expect(els.FormControl.children[0].matches(els.InputLabel)).toBe(true);
      expect(els.InputLabel.props.id).toEqual(hookProps.labelId);
      expect(els.InputLabel.children[0].el).toEqual(props.label);
      expect(els.FormControl.children[1].el.type).toEqual('MuiSelect');
    });
    test('render select with props', () => {
      const selectProps = els.MuiSelect.props;
      expect(selectProps.labelId).toEqual(hookProps.labelId);
      expect(selectProps.id).toEqual(hookProps.inputId);
      expect(selectProps.onChange).toEqual(hookProps.onChange);
      expect(selectProps.value).toEqual(props.value);
      expect(selectProps.multiple).toEqual(props.multiple);
      expect(els.MuiSelect.children).toHaveLength(props.options.length);
      props.options.forEach((option, i) => {
        expect(els.MuiSelect.children[i].el.type).toEqual('MenuItem');
        expect(els.MuiSelect.children[i].props.value).toEqual(option.value);
        expect(els.MuiSelect.children[i].children[0].el).toEqual(option.label);
      });
    });
  });
});
