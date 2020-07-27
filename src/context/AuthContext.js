import AsyncStorage from "@react-native-community/async-storage"
import trackerApi from "../api/tracker"
import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
    switch (action.type) {
        case `add_error`:
            return { ...state, errorMessage: action.payload, }
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
    } catch (err) {
        dispatch({
            payload: `Something went wrong with sign up :(`,
            type: `add_error`,
        })
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        const response = await trackerApi.post(`/signin`)
        // try to signin
        // handle success by updating state
        // handle failure with error message somehow
    }
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
