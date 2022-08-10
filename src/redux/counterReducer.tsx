const INCREMENT = 'INCREMENT'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET = 'SET'
const RESET = 'RESET'
const ERROR = 'ERROR'


export type ActionType =
    incrementNumberAT
    | setMaxValueAT
    | setNumberAT
    | setStartValueAT
    | resetNumAT
    | errorAT

export type incrementNumberAT = ReturnType<typeof incrementNumberAC>
export type setStartValueAT = ReturnType<typeof setStartValueAC>
export type setMaxValueAT = ReturnType<typeof setMaxValueAC>
export type setNumberAT = ReturnType<typeof setNumberAC>
export type resetNumAT = ReturnType<typeof resetNumAC>
export type errorAT = ReturnType<typeof errorAC>



export type StateType = {
    startValue: number
    error: boolean
    maxValue: number
    displayText: string
    count: number
}

const initialState: StateType = {
    startValue: 0,
    error: false,
    maxValue: 0,
    displayText: '',
    count: 0
}

export const counterReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case INCREMENT :
            return {...state, count: action.incrementNum + 1}
        case SET_MAX_VALUE:
            return {...state, maxValue: (action.maxValue)}
        case SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case SET:
            return {...state, count: action.startValue}
        case RESET:
            return {...state, count:state.startValue}
        case ERROR:
            return {...state, error: action.error}
        default:
            return state
    }

}

export const incrementNumberAC = (incrementNum: number) => ({type: INCREMENT, incrementNum}) as const
export const setStartValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue}) as const
export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue}) as const
export const setNumberAC = (value: number) => ({type: SET, startValue: value}) as const
export const resetNumAC = (resetNum: number) => ({type: RESET, resetNum}) as const
export const errorAC = (error: boolean) => ({type: ERROR, error}) as const

