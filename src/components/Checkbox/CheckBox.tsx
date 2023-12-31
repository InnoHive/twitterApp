import React, {useState} from "react";
import { StyledCheckbox, StyledCheckBoxBackground } from "./StyledCheckbox";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import './CheckBox.css'

export const CheckBox:React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const toggleCheckbox = () => {
        setClicked(!clicked);
    }

    return (
        <div className="checkbox-container">
            <StyledCheckBoxBackground active={clicked}  onClick={toggleCheckbox}>
                <StyledCheckbox active={clicked}>
                    {clicked ? <CheckRoundedIcon sx={{fontSize: 18, color: "white"}}/> : <></>}
                </StyledCheckbox>
            </StyledCheckBoxBackground>
        </div> 
    )
}