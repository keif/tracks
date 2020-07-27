import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"
import { useEffect, useState } from "react"

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(``)
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync()
            if (!granted) {
                throw new Error("Location permission not granted")
            }

            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    distanceInterval: 10,
                    timeInterval: 1000,
                },
                callback
            )
            setSubscriber(sub)
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        if (shouldTrack) {
            startWatching()
        } else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])

    return [err]
}
