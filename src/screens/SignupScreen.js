import React from "react"
import { StyleSheet, View } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "../components/Spacer"

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input label={`Email`}/>
            <Spacer/>
            <Input label={`Password`}/>
            <Spacer>
                <Button
                    onPress={() => navigation.navigate(`Signin`)}
                    title={`Sign Up`}
                />
            </Spacer>
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
