import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button
                onPress={() => navigation.navigate(`Signin`)}
                title={`Go to Signin`}
            />
            <Button
                onPress={() => navigation.navigate(`mainFlow`)}
                title={`Go to main flow`}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen
