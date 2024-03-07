import { v4 as uuid } from 'uuid';

export const selectLabelId = (id) => `mc-select-label-${id}`;
export const selectInputId = (id) => `mc-select-${id}`;

const useSelectData = ({ handleChange }) => {
  const id = uuid();
  const labelId = selectLabelId(id)
  const inputId = selectInputId(id)
  return {
    labelId,
    inputId,
     onChange: (e) => handleChange(e.target.value),
  };
};

export default useSelectData;
