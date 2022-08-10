import {AppRootState} from "./store";

export const selectStartValue = (state: AppRootState) => state.counterReducer.startValue
export const selectMaxValue = (state: AppRootState) => state.counterReducer.maxValue
