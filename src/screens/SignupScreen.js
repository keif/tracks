import React, { useContext } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements"
import AuthForm from "../components/AuthForm"
import Spacer from "../components/Spacer"
import { Context as AuthContext } from "../context/AuthContext"

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)

    const onSignin = () => {
        navigation.navigate(`Signin`)
    }

    return (
        <View style={styles.container}>
            <AuthForm
                errorMessage={state.errorMessage}
                headerText={`Sign Up for Tracker`}
                onSubmit={signup}
                submitButtonText={`Sign Up`}
            />
            <TouchableOpacity onPress={onSignin}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead!</Text>
                </Spacer>
            </TouchableOpacity>
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
    link: {
        color: `blue`,
    },
})

export default SignupScreen
