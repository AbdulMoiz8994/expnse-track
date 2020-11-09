import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'
const initialState = {
    transcations: []
}

//creating globalcontext
export const GlobalContext = createContext(initialState);


// creating provider for globalcontext
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)


    function delTranscation(id) {
        dispatch({
            type: "DELETE_TRANSCATION",
            payload: id
        })
    }
    function addTranscation(transcation) {
        dispatch({
            type: "ADD_TRANSCATION",
            payload: transcation
        })
    }
    return (
        <GlobalContext.Provider value={
            {
                transcations: state.transcations,
                delTranscation,
                addTranscation
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


