import React, { useContext, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { NavigationEvents } from "react-navigation"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { Context as AuthContext } from "../context/AuthContext"

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage, tryLocalSignin, } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                errorMessage={state.errorMessage}
                headerText={`Sign Up for Tracker`}
                onSubmit={signup}
                submitButtonText={`Sign Up`}
            />
            <NavLink
                routeName={`Signin`}
                text={`Already have an account? Sign in instead!`}
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: `center`,
        flex: 1,
        marginBottom: 250,
    },
})

export default SignupScreen
