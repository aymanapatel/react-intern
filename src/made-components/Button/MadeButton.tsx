import Button from '@mui/material/Button';
export interface ButtonProps {
    name: string
}


export const MadeButton: React.FC<ButtonProps> = (props) => {
    return <Button variant="contained">{props.name}</Button>
    ;
};