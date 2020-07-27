import React from "react"
import { StyleSheet } from "react-native"
import MapView, { Polyline } from "react-native-maps"

const Map = () => {
    let points = []
    for (let i = 0; i < 20; i += 1) {
        let point = {}
        if (i % 2 === 0) {
            point = {
                latitude: 37.33233 + i * 0.001,
                longitude: -122.03121 + i * 0.001,
            }
        } else {
            point = {
                latitude: 37.33233 - i * 0.002,
                longitude: -122.03121 + i * 0.001,
            }
        }
        points.push(point)
    }
    return (
        <MapView
            initialRegion={{
                latitude: 37.33233,
                latitudeDelta: 0.01,
                longitude: -122.03121,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Polyline coordinates={points}/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
})

export default Map
