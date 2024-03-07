import { v4 as uuid } from 'uuid';
import { 
  vi,
  describe,
  test,
  expect,
} from 'vitest';

import useSelectData, { selectLabelId, selectInputId } from './useSelectData';

vi.mock('uuid', () => ({ v4: vi.fn() }));

const props = { handleChange: vi.fn(val => ({ handleChange: val })) };

describe('useSelectData', () => {
  test('should return ids and onChange event', () => {
    const out = useSelectData(props);
    const id = uuid();
    expect(out.labelId).toEqual(selectLabelId(id));
    expect(out.inputId).toEqual(selectInputId(id));
    const value = 'test-value';
    expect(out.onChange({ target: { value } })).toEqual(props.handleChange(value));
  });
});
