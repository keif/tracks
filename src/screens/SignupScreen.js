import React, { useContext, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "../components/Spacer"
import { Context as AuthContext } from "../context/AuthContext"

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const onSignin = () => {
        navigation.navigate(`Signin`)
    }
    const onSubmit = () => {
        signup({ email, password })
    }

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                autoCapitalize={`none`}
                autoCorrect={false}
                label={`Email`}
                onChangeText={setEmail}
                value={email}
            />
            <Spacer/>
            <Input
                autoCapitalize={`none`}
                autoCorrect={false}
                label={`Password`}
                onChangeText={setPassword}
                secureTextEntry
                value={password}
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button
                    onPress={onSubmit}
                    title={`Sign Up`}
                />
            </Spacer>
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
    errorMessage: {
        color: `#f00`,
        fontSize: 16,
        marginTop: 15,
        marginLeft: 15,
    },
    link: {
        color: `blue`,
    }
})

export default SignupScreen
