import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import Button from "../Button/Button";
import {incrementNumberAC, resetNumAC} from "../../redux/counterReducer";



const DisplayComponent = () => {
    let count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const startValue = useSelector<AppRootState, number>(state => state.counterReducer.startValue)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)
    const dispatch = useDispatch()

    const incrementButtonHandler = () => {
       dispatch(incrementNumberAC(count))
    }
    const resButtonHandler = () => {
       dispatch(resetNumAC(startValue))
    }

    return (
        <div>
            <span>{count}</span>
            <Button disabled = {count === maxValue} callback={incrementButtonHandler} name='INC'/>
            <Button callback={resButtonHandler} name='RES' disabled={false}/>
        </div>
    );
};

export default DisplayComponent;
