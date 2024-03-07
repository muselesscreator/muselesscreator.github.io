import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useSelectData from './useSelectData';

const Select = ({
  label,
  options,
  value,
  handleChange,
  multiple,
}) => {
  const {
    labelId,
    inputId,
    onChange,
  } = useSelectData({ handleChange });
  return (
    <FormControl className="mc-select-root">
      <InputLabel
        className="mc-select-label"
        id={labelId}
      >
        {label}
      </InputLabel>
      <MuiSelect
        labelId={labelId}
        className="filter-select mc-select"
        id={inputId}
        value={value}
        label="Select category"
        multiple={multiple}
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            className="mc-select-item"
          >
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
export default Select;

