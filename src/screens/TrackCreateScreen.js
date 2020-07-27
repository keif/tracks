import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"
import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView } from "react-navigation"
import "../_mockLocations"
import Map from "../components/Map"

const TrackCreateScreen = () => {
    const [err, setErr] = useState(``)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync()
            if (!granted) {
                throw new Error("Location permission not granted")
            }

            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                distanceInterval: 10,
                timeInterval: 1000,
            }, (location) => {
                console.log(location)
            })
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{ top: `always` }}>
            <Text h3>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
