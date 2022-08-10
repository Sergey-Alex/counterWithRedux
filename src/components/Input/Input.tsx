import React, {ChangeEvent} from 'react';


type InputTypeProps = {
    callBack: (value: number) => void
    value: number
    dis: boolean
    type: string
    className: string
}

const Input: React.FC<InputTypeProps> = ({callBack, dis, value, type ,className}) => {
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(+e.currentTarget.value)
    }

    return (
        <div>
            <input
                className={className}
                disabled={dis}
                value={value}
                onChange={inputChangeHandler}
                type = {type}
            />
        </div>
    );
};

export default Input;
