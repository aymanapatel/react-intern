import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DatePickerProps {
    timeZone: string
}

export const MadeDatePicker: React.FC<DatePickerProps> = (props) => {
    console.log(props)

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
    </LocalizationProvider>
    )

}