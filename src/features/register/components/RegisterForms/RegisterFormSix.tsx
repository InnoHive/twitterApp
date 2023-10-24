import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/Store";
import { useNavigate } from "react-router-dom";
import { ValidatedTextInput } from "../../../../components/ValidatedInput/ValidatedTextInput";
import VisibilityOffOutlinedIcon  from "@mui/icons-material/VisibilityOffOutlined";
import  VisibilityOutlinedIcon from  "@mui/icons-material/VisibilityOutlined";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import { loginUser, setFromRegister } from "../../../../redux/Slices/UserSlice";

import './RegisterForm.css'
import '../../../../assets/global.css'


export const RegisterFormSix:React.FC = () => {
    const state = useSelector((state:RootState) => state);
    const dispatch:AppDispatch = useDispatch();

    const [ active, setActive] = useState<boolean> (false);
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        dispatch(updateRegister({ 
            name: "password",
            value: e.target.value
        }));
    }

    //password toggle view and
    const toggleView = () => {
        setActive(!active);
    }


    //watch side effect of the dispatch object being dispatch
    useEffect(() =>{
        if(state.user.loggedIn){
            navigate("/home");
            return (() =>{

            });
        }
        if(state.user.fromRegister){
            //we are ready to dispatch the login
            dispatch(loginUser({
                username: state.register.username,
                password: state.register.password
            }));
            return;
        }
        if(state.register.login){
            //store some user info into local storage, that way we can load the user into user slides 
            //when we hit the feed page //navigate("/home"); //set the dispatch to set user fromRegister
           dispatch(setFromRegister(true));
         }
    }, [state.register.login, state.user.loggedIn, state.user.fromRegister]);

    return (
        <div className="register-container">
            <div className="register-content">
                <h1 className="register-header-2">You'll need a password</h1>
                <p className="register-text color-gray">Make sure it's 8 characters or more</p>
                <div className="register-six-password">
                    <ValidatedTextInput
                        valid={true}
                        label={"Password"}
                        name={"password"}
                        changeValue={handleChange}
                        attributes={{
                            minlenght: 8,
                            type: active ? "text" : "password"
                        }}
                    />
                        <div onClick={toggleView} className="register-six-icon">
                            {active ? <VisibilityOffOutlinedIcon sx = {{fontSize: "24px"}}/> : <VisibilityOutlinedIcon sx={{fontSize: "24px"}}/>}
                        </div>
                </div>
            </div>
        </div>
    )

}