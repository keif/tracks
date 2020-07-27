import trackerApi from "../api/tracker"
import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
    switch (action.type) {
        case `signup`:
            return state
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post(`/signup`, { email, password })
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data)
        }
        // make api request to sign up with email/password

        // if sign up succeeds, modify our state and say we are authenticated

        // if sign up fails, reflect an error message somewhere
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
    { isSignedTrue: false }
)
