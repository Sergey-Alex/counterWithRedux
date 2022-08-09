import React, {ChangeEvent} from 'react';
import cls from './Inputs.module.css'

type InputTypeProps = {
    callBack: (value: number) => void
    value: number
    dis: boolean
    type: string
}

const Input: React.FC<InputTypeProps> = ({callBack, dis, value, type}) => {
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(+e.currentTarget.value)
    }

    return (
        <div>
            <input
                disabled={dis}
                className={cls.input}
                value={value}
                onChange={inputChangeHandler}
                type = {type}
            />
        </div>
    );
};

export default Input;
