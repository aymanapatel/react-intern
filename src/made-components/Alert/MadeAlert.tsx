

import { Alert } from '@mui/material';

export interface ButtonProps {
    severity: 'success'
    value: string
}


export const MadeAlert: React.FC<ButtonProps> = (props) => {
    return <Alert severity={props.severity}>
    {props.value}
  </Alert>
    ;
};

