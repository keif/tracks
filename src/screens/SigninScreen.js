import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { Context as AuthContext } from "../context/AuthContext"

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                errorMessage={state.errorMessage}
                headerText={`Sign In to Your Account`}
                onSubmit={signin}
                submitButtonText={`Sign In`}
            />
            <NavLink
                routeName={`Signup`}
                text={`Don't have an account? Sign up instead!`}
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen
