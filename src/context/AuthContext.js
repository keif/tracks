import AsyncStorage from "@react-native-community/async-storage"
import trackerApi from "../api/tracker"
import { navigate } from "../navigationRef"
import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
    switch (action.type) {
        case `add_error`:
            return { ...state, errorMessage: action.payload, }
        case `clear_error_message`:
            return { ...state, errorMessage: ``, }
        case `signin`:
        case `signup`:
            return { errorMessage: ``, token: action.payload, }
        default:
            return state
    }
}

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem(`token`)
    if (token) {
        dispatch({
            payload: token,
            type: `signin`,
        })

        navigate(`TrackList`)
    } else {
        navigate(`loginFlow`)
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({
        type: `clear_error_message`,
    })
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post(`/signup`, { email, password })
        await AsyncStorage.setItem(`token`, response.data.token)
        dispatch({
            payload: response.data.token,
            type: `signup`,
        })

        navigate(`TrackList`)
    } catch (err) {
        dispatch({
            payload: `Something went wrong with sign up :(`,
            type: `add_error`,
        })
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post(`/signin`, { email, password })
        await AsyncStorage.setItem(`token`, response.data.token)
        dispatch({
            payload: response.data.token,
            type: `signin`,
        })

        navigate(`TrackList`)
    } catch (err) {
        dispatch({
            payload: `Something went wrong with sign in :(`,
            type: `add_error`,
        })
    }
    // handle success by updating state
    // handle failure with error message somehow
}

const signout = (dispatch) => {
    return async () => {
        const response = await trackerApi.post(`/signout`)
        // signout
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin, },
    { token: null, errorMessage: `` }
)
