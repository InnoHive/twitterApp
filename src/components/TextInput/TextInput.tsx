
import React, {useState, useEffect} from 'react'


//propps
interface TextInputProps {
    name: string;
    label: string;
    errorMessage: string;
    onChange(e:React.ChangeEvent<HTMLInputElement>):void;
    maxLenght?: number
    validator?(value: string):boolean;
}


//testinput component function
export const TextInput: React.FC<TextInputProps> = ({name, label, errorMessage, onChange, maxLenght, validator}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const updateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        setInputValue(e.target.value);
    }

  return (
    <div className='text-input'>
        <div>
            <span>
                {label}
            </span>
            <input
                type='text'
                name={name}
                value={inputValue}
                onChange={updateInput}
                maxLength={maxLenght}
                placeholder={label}
                />
        </div>
    </div>
  )
}

