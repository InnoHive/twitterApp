import React from "react";
 import './RegisterForm.css';
 import '../../../../assets/global.css'
 import { CheckBox } from "../../../../components/Checkbox/CheckBox";


 export const RegisterFormTwo:React.FC = () =>{

    return(
        <div className="register-container">
            <div className="register-content">
                <h1 className="register-header">
                    Customize your experience
                </h1>
                <h3 className="register-subheader">
                    Tract where you see twitter content on the web.
                </h3>
                <div className="register-two-checkbox-wrapper">
                    <p className="register-text ">
                        The App uses this data to personalize your experience. This web browser history will never be stored with your name, email, or phone number.
                    </p>
                    <CheckBox/>
                </div>
                <p className=" register-text color-gray">
                    By signing up, you agree to our <span className="register-link color-blue">Terms</span>, <span className="register-link color-blue"> Privacy Policy </span> and <span className="register-link color-blue">Cookies use</span>. Twitter may use your contact information, including your 
                    email address and phone number for the purpose outline in our Privacy Policy. <span className="register-link color-blue">Learn More</span>
                </p>
            </div>
        </div>
    )
 }