import AsyncStorage from "@react-native-community/async-storage"
import trackerApi from "../api/tracker"
import { navigate } from "../navigationRef"
import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
    switch (action.type) {
        case `add_error`:
            return { ...state, errorMessage: action.payload, }
        case `signin`:
        case `signup`:
            return { errorMessage: ``, token: action.payload, }
        default:
            return state
    }
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
    { signin, signout, signup, },
    { token: null, errorMessage: `` }
)
