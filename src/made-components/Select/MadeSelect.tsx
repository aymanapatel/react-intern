import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';


export interface SelectProps {
    label: string
    selectId: string
}


export const MadeSelect: React.FC<SelectProps> = (props) => {

    const [selectValue, setSelectValue] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };
    return  <Select
    labelId={props.label}
    id={props.selectId}
    value={selectValue}
    label={props.label}
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
    ;
};