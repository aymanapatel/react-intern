
import { MadeButton } from '../made-components/Button/MadeButton';
import { MadeDatePicker } from '../made-components/DatePicker/MadeDatePicker';
import { MadeAlert } from '../made-components/Alert/MadeAlert';
import { MadeInput } from '../made-components/Input/MadeInput';
import { MadeSelect } from '../made-components/Select/MadeSelect';

export function Components() {

  return (<>

          <MadeButton name='made'/>
          <br/>
          <br/>
          <MadeInput placeholder='how'/>
          <br/>
          <MadeAlert severity='success' value='This is an alert'/>
          <MadeDatePicker timeZone='AMEA'/>
          <br/>
          <MadeSelect label='hi' selectId='custom-id'/>
          </>);
}