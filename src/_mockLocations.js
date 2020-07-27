import * as Location from "expo-location"

const tenMetersWithDegrees = 0.0001

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            accuracy: 5,
            altitude: 5,
            altitudeAccuracy: 5,
            heading: 0,
            latitude: 40.138223708340284 + increment * tenMetersWithDegrees,
            longitude: -83.0689981478184 + increment * tenMetersWithDegrees,
            speed: 0,
        }
    }
}

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit(`Expo.locationChanged`, {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter += 1
}, 1000)