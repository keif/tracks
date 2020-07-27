import React from "react"
import createDataContext from "./createDataContext"

const locationReducer = (state, action) => {
    switch (action.type) {
        case `add_current_location`:
            return { ...state, currentLocation: action.payload, }
        default:
            return state
    }
}

const startRecording = (dispatch) => () => {
}
const stopRecording = (dispatch) => () => {
}
const addLocation = (dispatch) => (location) => {
    dispatch({
        payload: location,
        type: `add_current_location`,
    })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, },
    { recording: false, locations: [], currentLocation: null, }
)
