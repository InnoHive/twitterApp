
interface Themecolors{
    blue: string;
    black: string;
    darkGray: string; 
    gray: string;
    lightGray: string;
    white: string;
    error: string;
    
}

export interface Theme {
    colors: Themecolors;
}

export interface StyledInputProps{
    active: boolean;
    valid: boolean;
    theme: Theme;
    color?: string;
}

export interface ValidatedInputState{
    active: boolean;
    valid: boolean;
    typeIn: boolean;
    labelActive: boolean;
    labelColor: string;
    value: string;
}

export interface Dob{
    month:number;
     day:number;
     year:number;
}

export interface StyledNextButtonProps{
    active: boolean;
    theme: Theme;
    color: string;
}

export interface StyledCheckboxProps{
    active: boolean;
    theme: Theme;
}

export interface User{
    userId: number;
    firstName: string;
    lastName: string;
    email:string;
    username: string;
    phone: string;
    dateOfBirth: Dob;
    bio: string;
    nickname:string;
    profilePicture: string;
    bannerPicture:string;
}
 
interface RGBA{
    r:number;
    g:number;
    b:number;
    a:number;
}

export interface ModalButtonProps{
    fontColour: string;
    borderColor?: string;
    backgroundColor:string;
    fontSize:number
    fontWeight: number;
    hoverBackground:RGBA;
    hoverBorder?: RGBA;
} 