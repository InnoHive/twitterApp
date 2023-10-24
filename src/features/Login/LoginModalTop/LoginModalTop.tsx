import React from "react";


import blueLogo from '../../../assets/fwitter-logo-large-blue.png'
import './LoginModalTop.css'


interface LoginModalTopProps{
    closedModal: () => void;
}


export const LoginModalTop:React.FC <LoginModalTopProps> = ({closedModal}) => {

    return (
        <div className="login-modal-top">
            <div className="login-modal-top-left">
                <div className="login-modal-top-shadow" onClick={closedModal}>
                        x
                </div>
            </div>
            <div className="login-modal-top-middle">
                <img src="" className="login-modal-top-logo" alt="" />
            </div>
            <div className="login-modal-top-right"></div>
        </div>
    )
}