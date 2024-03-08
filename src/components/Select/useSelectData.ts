import { v4 as uuid } from 'uuid';

export const selectLabelId = (id: string) => `mc-select-label-${id}`;
export const selectInputId = (id: string) => `mc-select-${id}`;

const useSelectData = ({ handleChange }: { handleChange: (val: string) => unknown }) => {
  const id = uuid();
  const labelId = selectLabelId(id)
  const inputId = selectInputId(id)
  return {
    labelId,
    inputId,
     onChange: (e: { target: { value: string } }) => handleChange(e.target.value),
  };
};

export default useSelectData;
