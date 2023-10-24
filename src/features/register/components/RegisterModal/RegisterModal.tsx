import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/Store'

import { Modal } from '../../../../components/Modal/Modal'
import "./RegisterModal.css"
import { RegistrationStepCounter } from '../RegisterStepCounter/RegisterationStepCounter'
import { determineModalContent } from '../../util/RegisterModalUtils'
import { cleanRegisterState, decrementStep } from '../../../../redux/Slices/RegisterSlice'
import { RegisterNextButton} from '../RegisterNextButton/RegisterNextButton'




interface RegisterModalProps{
   toggleModal: () => void;
}



export const RegisterModal:React.FC <RegisterModalProps> = ({toggleModal} ) => {

  //redux hooks to manage the states
  const state = useSelector((state:RootState) => state.register)
  const dispatch:AppDispatch = useDispatch();
  



  //function to change the step number using the current variable and the update variables in the hooks
  const stepButtonClicked =  () => {
    if(state.step ===1){
      toggleModal();
      return;
    }
      dispatch(decrementStep());
  }




  useEffect(() => {
    return (() => {
      dispatch(cleanRegisterState());
    })
  }, [])




  return ( 
        <Modal  topContent={<RegistrationStepCounter step={state.step} changeStep={stepButtonClicked}/>} 
                content={determineModalContent (state.step)} 
                bottomContent={<RegisterNextButton step={state.step}/>}
        />
  )
}

