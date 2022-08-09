const INCREMENT = 'INCREMENT'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET = 'SET'
const RESET = 'RESET'
const ERROR = 'ERROR'
//const DISPLAY_TEXT = 'DISPLAY_TEXT'

export type ActionType =
    incrementNumberAT
    | setMaxValueAT
    | setNumberAT
    | setStartValueAT
    | resetNumAT
    | errorAT
 //   | displayTextAT

export type incrementNumberAT = ReturnType<typeof incrementNumberAC>
export type setStartValueAT = ReturnType<typeof setStartValueAC>
export type setMaxValueAT = ReturnType<typeof setMaxValueAC>
export type setNumberAT = ReturnType<typeof setNumberAC>
export type resetNumAT = ReturnType<typeof resetNumAC>
export type errorAT = ReturnType<typeof errorTextAC>
//export type displayTextAT = ReturnType<typeof displayTextAC>


export type StateType = {
    startValue: number
    error: string
    maxValue: number
    displayText: string
    count: number
}

const initialState: StateType = {
    startValue: 0,
    error: '',
    maxValue: 0,
    displayText: 'Enter value',
    count: 0
}

export const counterReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case INCREMENT :
            return {...state, count: action.incrementNum + 1}
        // case DISPLAY_TEXT:
        //     return {...state, displayText: action.displayText}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case SET:
            return {...state, startValue: action.startValue, maxValue: action.maxValue}
        case RESET:
            return {...state, count: action.resetNum}
        case ERROR:
            return {...state, error: action.errorText}
        default:
            return state
    }

}

export const incrementNumberAC = (incrementNum: number) => ({type: INCREMENT, incrementNum}) as const
export const setStartValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue}) as const
export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue}) as const
export const setNumberAC = (startValue: number, maxValue: number) => ({type: SET, startValue, maxValue}) as const
export const resetNumAC = (resetNum: number) => ({type: RESET, resetNum}) as const
export const errorTextAC = (errorText: string) => ({type: ERROR, errorText}) as const
// export const displayTextAC = (displayText: string) => ({type: DISPLAY_TEXT, displayText}) as const
