import React from "react";

import { Modal } from "../../../components/Modal/Modal";
import { LoginModalTop } from "../LoginModalTop/LoginModalTop";
import { LoginFormOne } from "../LoginForms/LoginFormOne";


import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";

interface LoginModalProps{
    toggleModal: () => void;
}


export const LoginModal:React.FC<LoginModalProps>  = ({toggleModal}) => {

    const state = useSelector((state:RootState) => state.user);

    return(
        <Modal
                topContent={<LoginModalTop closedModal={toggleModal}/> }
                content={<LoginFormOne/>}
                bottomContent={<div>Login Bottom</div>}
        />
    )

}