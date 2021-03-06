import React from "react"
import { Button, StyleSheet, Text } from "react-native"

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button
                onPress={() => navigation.navigate(`TrackDetail`)}
                title={`Go to Track Detail`}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen
