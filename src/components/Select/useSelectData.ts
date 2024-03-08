import { v4 as uuid } from 'uuid';

// import { SelectChangeEvent } from '@mui/material/Select';


export const selectLabelId = (id: string) => `mc-select-label-${id}`;
export const selectInputId = (id: string) => `mc-select-${id}`;


type ChangeHandler = (value: unknown) => void;

const useSelectData = ({ handleChange }: { handleChange: ChangeHandler }) => {
  const id = uuid();
  const labelId = selectLabelId(id)
  const inputId = selectInputId(id)
  const onChange = (
    (e: { target: { value: unknown } }, _: unknown) => handleChange(e.target.value)
  );
  return {
    labelId,
    inputId,
    onChange,
  };
};

export default useSelectData;
