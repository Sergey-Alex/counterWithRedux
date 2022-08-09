import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import Button from "../Button/Button";



const DisplayComponent = () => {
    let count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const dispatch = useDispatch()

    const incrementButtonHandler = () => {
        console.log('inc')
    }
    const resButtonHandler = () => {
        console.log('res')
    }

    return (
        <div>
            <span>{count}</span>
            <Button disabled={count < 0} callback={incrementButtonHandler} name='INC'></Button>
            <Button callback={resButtonHandler} name='RES' disabled={false}></Button>
        </div>
    );
};

export default DisplayComponent;
