import React from "react"
import { StyleSheet } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "../components/Spacer"

const SignupScreen = ({ navigation }) => {
    return (
        <>
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
        </>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({})

export default SignupScreen
