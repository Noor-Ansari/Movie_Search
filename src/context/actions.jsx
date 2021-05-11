import { SET_DATA, SET_INPUT, SET_LOADER } from "./const"

export const setData = (data) => {
    return {
        type : SET_DATA,
        payload : data
    }
}

export const setLoader = (state) => {
    return {
        type : SET_LOADER,
        payload : state
    }
}

export const setInput = (input) => {
    return {
        type : SET_INPUT,
        payload : input
    }
}