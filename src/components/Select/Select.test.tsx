import 'react';
import {
  beforeEach,
  describe,
  test,
  expect,
  vi,
  Mock,
} from 'vitest';
import {
  shallow,
  setMockName,
  ExplorerData,
} from '@muselesscreator/react-shallow-snapshot';

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
  multiple: true,
}
const hookProps = {
  labelId: 'test-label-id',
  inputId: 'test-input-id',
  onChange: vi.fn(),
};
(useSelectData as Mock).mockReturnValue(hookProps);
setMockName(props.handleChange, 'props.handleChange');
setMockName(hookProps.onChange, 'hookProps.onChange');
describe('Select component', () => {
  let instance;
  let els = {}  as Record<string, typeof ExplorerData>;
  beforeEach(() => {
    vi.clearAllMocks();
  }); 
  describe('render', () => {
    test('snapshot', () => {
      const el = shallow(<Select {...props} />);
      instance = el.instance;
      expect(el.snapshot).toMatchSnapshot();
    });
    test('render form control with children', () => {
      const el = shallow(<Select {...props} />);
      instance = el.instance;
      els = {
        FormControl: instance.findByType('FormControl')[0],
        InputLabel: instance.findByType('InputLabel')[0],
      };
      expect(els.FormControl.children[0].matches(els.InputLabel)).toBe(true);
      expect(els.InputLabel.props.id).toEqual(hookProps.labelId);
      expect(els.InputLabel.children[0].el).toEqual(props.label);
      const selectEl = els.FormControl.children[1].el as typeof ExplorerData;
      expect(selectEl.type).toEqual('MuiSelect');
    });
    test('render select with props', () => {
      const el = shallow(<Select {...props} />);
      instance = el.instance;
      els = {
        FormControl: instance.findByType('FormControl')[0],
        MuiSelect: instance.findByType('MuiSelect')[0],
      };
      const selectProps = els.MuiSelect.props;
      expect(selectProps.labelId).toEqual(hookProps.labelId);
      expect(selectProps.id).toEqual(hookProps.inputId);
      expect(selectProps.onChange).toEqual(hookProps.onChange);
      expect(selectProps.value).toEqual(props.value);
      expect(selectProps.multiple).toEqual(props.multiple);
      expect(els.MuiSelect.children).toHaveLength(props.options.length);

      props.options.forEach((option, i) => {
        const selectEl = els.MuiSelect.children[i].el as typeof ExplorerData;
        expect(selectEl.type).toEqual('MenuItem');
        expect(els.MuiSelect.children[i].props.value).toEqual(option.value);
        expect(els.MuiSelect.children[i].children[0].el).toEqual(option.label);
      });
    });
  });
});
