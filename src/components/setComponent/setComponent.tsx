import React from 'react';
import Input from "../Input/Input";
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {setMaxValueAC, setNumberAC, setStartValueAC} from "../../redux/counterReducer";
import {AppRootState, useAppSelector} from "../../redux/store";
import Button from "../Button/Button";
import cls from './setComponent.module.css'
import {selectMaxValue, selectStartValue} from "../../redux/selectors";



const SetComponent = () => {
    const startValue = useAppSelector(selectStartValue)
    const maxValue = useAppSelector(selectMaxValue)
    const error = useSelector<AppRootState, boolean>(state => state.counterReducer.error)
    const count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const dispatch = useDispatch();



    const setStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
    }

    const setMaxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))
    }
    const setHandler = () => {
        dispatch(setNumberAC(startValue))
    }

    return (
        <div>
            <div>
                <span>max value:</span>
                <Input className={cls.input} type='number' callBack={setMaxValueHandler} value={maxValue} dis={maxValue < 0}/>
            </div>
            <div>
                <span>start value:</span>
                <Input className={cls.input} type='number' callBack={setStartValue} value={startValue} dis={startValue < 0}/>
            </div>
            <Button  disabled={maxValue === startValue} callback={setHandler} name='SET'></Button>
        </div>
    );
};

export default SetComponent;
