import React, { useContext } from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import MapView, { Circle } from "react-native-maps"
import { Context as LocationContext } from "../context/LocationContext"

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size={`large`} style={{ marginTop: 200 }}/>
    }

    return (
        <MapView
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Circle
                center={currentLocation.coords}
                fillColor={`rgba(158, 158, 255, 0.3)`}
                radius={30}
                strokeColor={`rgba(158, 158, 255, 1.0)`}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
})

export default Map
