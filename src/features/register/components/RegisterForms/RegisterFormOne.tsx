
import React  from 'react'
import { useSelector} from 'react-redux';
import { RootState} from '../../../../redux/Store';

import { RegisterDateInput } from '../RegisterDateInput/RegisterDateInput';
import { RegisterNameInput } from '../RegisterNameInput/RegisterNameInput';
import { RegisterEmailInput } from '../RegisterEmailInput/RegisterEmailInputs';
import './RegisterForm.css'; 
import '../../../../assets/global.css'


// components
export const RegisterFormOne: React.FC = () => {

    const registerState = useSelector((state:RootState) => state.register);
    
  return (
    <div className='register-container'>
        <div className="register-content">
          <h1 className='register-header'> Create your account </h1>
         <RegisterNameInput firstName={registerState.firstName} lastName={registerState.lastName}/>
          <RegisterEmailInput email={registerState.email}/>
          <div className='register-one-dob-wrapper'>
            <h4 className='register-h4'>Date of Birth</h4>
            <span className='register-text-sm color-gray'>
              This will not be shown publicly. Confirm your own age, even this account is for a business or something else.
            </span>
          </div>
          <RegisterDateInput  date={registerState.dob}/>
        </div>
    </div>
  )
}

