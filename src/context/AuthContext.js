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
    return ({ email, password }) => {
        // make api request to sign up with email/password

        // if sign up succeeds, modify our state and say we are authenticated

        // if sign up fails, reflect an error message somewhere
    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handle success by updating state
        // handle failure with error message somehow
    }
}

const signout = (dispatch) => {
    return () => {
        // signout
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signout, signup, },
    { isSignedTrue: false }
)
