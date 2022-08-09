import React from 'react';
import Input from "../Input/Input";
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {setMaxValueAC, setNumberAC, setStartValueAC} from "../../redux/counterReducer";
import {AppRootState} from "../../redux/store";
import Button from "../Button/Button";



const SetComponent = () => {

    const startValue = useSelector<AppRootState, number>(state => state.counterReducer.startValue)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)
    const dispatch = useDispatch();

    const setStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
    }

    const setMaxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))
    }
    const setHandler = () => {
        console.log('set')
    }

    return (
        <div>
            <div>
                <span>max value:</span>
                <Input type='number' callBack={setMaxValueHandler} value={maxValue} dis={maxValue < 0}/>
            </div>
            <div>
                <span>start value:</span>
                <Input type='number' callBack={setStartValue} value={startValue} dis={startValue < 0}/>
            </div>
            <Button disabled={maxValue === startValue} callback={setHandler} name='SET'></Button>
        </div>
    );
};

export default SetComponent;
