import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/Store";

import { verifyUsername } from "../../../redux/Slices/UserSlice";
import { ValidatedTextInput } from "../../../components/ValidatedInput/ValidatedTextInput";
import { ModlaButton } from "../../../components/ModalButton/ModalButton";
import { validateEmail, validatePhone } from "../../../services/Validators";

import './LoginFormOne.css'
import '../../../assets/global.css'

import google from '../../../assets/google.png'
import apple from '../../../assets/apple.png'




export const LoginFormOne:React.FC = () =>{
    const state = useSelector((state:RootState) => state.user);
    const dispatch:AppDispatch = useDispatch();

    const [credential, setCredential] = useState<string>('');


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        setCredential(e.target.value);
    }

    const findUsername= () :void  =>{
        let body = { email: '', phone: '', username: ''};

        if(validateEmail(credential)){
            body.email = credential;
        }else if(validatePhone(credential)){
            body.phone = credential; 
        }else{
            body.username = credential;
        }
        console.log(body);

        dispatch(verifyUsername(body));
    }






    return (
        <div className="login-form-one-container">
            <h1 className="login-form-header">Sign in the App</h1>
           <ModlaButton
                fontColour={'#536471'}
                borderColor={'#536471'}
                backgroundColor={'white'}
                fontSize={15}
                fontWeight={600}
                hoverBackground={{
                    r: 179,
                    g: 204,
                    b: 255,
                    a: .05
                }}
                hoverBorder={{
                    r: 128,
                    g: 170,
                    b: 255,
                    a: .5
                }}
             >
                <img src={google} className="login-form-one-buttons-logo" alt="" />
                Sign in with Google
            </ModlaButton>
            <ModlaButton
                fontColour={'black'}
                borderColor={'#536471'}
                backgroundColor={'white'}
                fontSize={16}
                fontWeight={700}
                hoverBackground={{
                    r:87,
                    g:87,
                    b:87,
                    a:.1
                }}
                hoverBorder={{
                    r:87,
                    g:87,
                    b:87,
                    a:1
                }}
            >
                <img src={apple} className="login-form-one-buttons-logo"alt="" />
                Sign in with Apple
            </ModlaButton>
            <div className="login-form-one-divider">
                <div className="login-form-one-line"></div>
                <p className="login-form-one-or">or</p>
                <div className="login-form-one-line"></div>
            </div>
            <ValidatedTextInput
                valid={!state.error}
                name={"identifier"}
                label={"phone, email or username"}
                changeValue={handleChange}
                
            />
                {state.error ? <p className="login-form-one-error color-red"> Unable to find user </p>  : <></>}
            <ModlaButton
                fontColour={'white'}
                backgroundColor={'black'}
                fontSize={16}
                fontWeight={700}
                hoverBackground={{
                    r:0,
                    g:0,
                    b:0,
                    a:.9
                }}
                onClick={findUsername }
            >
                Next
            </ModlaButton>
           <ModlaButton
                fontColour={'black'}
                borderColor={'#D3D3D3'}
                backgroundColor={'white'}
                fontSize={16}
                fontWeight={700}
                hoverBackground={{
                    r:83,
                    g:100,
                    b: 113,
                    a:.2,
                }}
                hoverBorder={{
                    r:211,
                    g:211,
                    b:211,
                    a:0.1
                }}
           >
                Forget password?
           </ModlaButton>
        <p className="login-form-one-text color-gray">Don't have an account? <span className="link color-blue">Sign Up</span></p>
        </div>
    )
}