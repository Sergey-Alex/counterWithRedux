import React from 'react';
import cls from './Button.module.css'
type ButtonPropsType = {
    callback: () => void
    name: string
    disabled: boolean
}

const Button:  React.FC<ButtonPropsType> = ({callback, name, disabled}) => {
    return (
        <div>
            <button disabled={disabled} onClick={callback}>{name}</button>
        </div>
    );
};

export default Button;
