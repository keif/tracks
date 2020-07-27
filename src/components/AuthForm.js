import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "./Spacer"

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, }) => {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const onPress = () => onSubmit({ email, password })

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    onPress={onPress}
                    title={submitButtonText}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: `#f00`,
        fontSize: 16,
        marginTop: 15,
        marginLeft: 15,
    },
})

export default AuthForm