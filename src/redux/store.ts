import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counterReducer: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)