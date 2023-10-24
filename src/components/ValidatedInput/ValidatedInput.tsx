import React, { useState, useEffect}from 'react'

import { ValidatedInputState } from '../../utils/GlobalInterfaces';
import { StyledInputBox, StyledInputLabel } from './StyledInput'
import { determineValidatedStyles } from '../../utils/DetermineStyleUtils';
import './ValidatedInput.css'

interface ValidatedUserInputProps  {
    name: string;
    label : string;
    errorMessage : string;
    validator(value:string) : boolean;
    changeValue(e:React.ChangeEvent<HTMLInputElement>): void;
    attribute?:Record<string, string | number | boolean>
}

export const ValidatedInput:React.FC<ValidatedUserInputProps> = ({
    name,
    label,
    errorMessage,
    validator,
    changeValue,
    attribute
}) => {

    const[validatedState, SetValidateState] = useState<ValidatedInputState>({
        active: false,
        valid: true,
        typeIn: false,
        labelActive: false,
        labelColor: 'gray',
        value : ''
    });


    useEffect(() => {
            SetValidateState(determineValidatedStyles(validatedState, validator));
    },[validatedState.active, validatedState.typeIn, validatedState.value, validatedState.labelActive, validatedState.labelColor]);
        

    const focus = (e:React.FocusEvent<HTMLInputElement>) : void => {
        SetValidateState({
            ...validatedState, 
            active: !validatedState?.active
        });
    }


    //update value
    const updateValue = (e:React.ChangeEvent<HTMLInputElement>): void => {
        //changeValue(e);
        SetValidateState({
          ...validatedState, 
            valid: validator(e.target.value),
            typeIn: true,
            value: e.target.value
        });
        changeValue(e);
    }

 
    
  return (
    <div className="validated-input">
        <StyledInputBox active={validatedState.active} valid={validatedState.valid}>
            <StyledInputLabel color={validatedState.labelColor} active={validatedState.labelActive} valid={validatedState.valid}>{label} </StyledInputLabel>
            <input className="validated-input-value"
                onFocus={focus}
                onBlur={focus}
                onChange={updateValue}
                {...attribute}
            />
        </StyledInputBox>
        {validatedState.valid ? <></>:<span>{errorMessage}</span>}
    </div>
  )
}

