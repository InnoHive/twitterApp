import React from 'react'

import { displayIcon, iconClass } from '../../util/RegisterStepUtils';
import './RegistrationStepCounter.css'

interface RegisterStepsProps{
    step:number;
    changeStep(): void;
}

export const RegistrationStepCounter:React.FC<RegisterStepsProps> = ({step, changeStep}) => {
  return (
    <div className='reg-step-counter-container'>
        <div className={iconClass(step)} onClick={changeStep}>
            {displayIcon(step) }
        </div>
        <span className="reg-step-number">Step {step} of 6</span>
    </div>
  )
}
