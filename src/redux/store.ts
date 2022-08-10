import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {TypedUseSelectorHook, useSelector} from "react-redux";

const persistConfig = {
    key: 'root',
    storage,

}

const rootReducer = combineReducers({
    counterReducer: counterReducer
})

const persistedReducer =  persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer)

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

export const persistor =  persistStore(store)

//types
export type AppRootState = ReturnType<typeof rootReducer>