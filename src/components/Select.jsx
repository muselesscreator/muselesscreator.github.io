import React from 'react';
import { v4 as uuid } from 'uuid';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import classNames from 'classnames';

const Select = ({
  label,
  options,
  value,
  handleChange,
}) => {
  const id = uuid();
  return (
    <FormControl className="mc-select-root">
      <InputLabel
      className="mc-select-label"
      id={`mc-select-label-${id}`}
    >
      {label}
    </InputLabel>
      <MuiSelect
        labelId={`mc-select-label-${id}`}
        className="filter-select mc-select"
        id={`mc-select-${id}`}
        value={value}
        label="Select category"
        onChange={(e) => {
          return handleChange(e.target.value);
        }}
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

