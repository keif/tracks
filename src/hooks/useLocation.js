import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"
import { useEffect, useState } from "react"

export default (callback) => {
    const [err, setErr] = useState(``)
    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync()
            if (!granted) {
                throw new Error("Location permission not granted")
            }

            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    distanceInterval: 10,
                    timeInterval: 1000,
                },
                callback
            )
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return [err]
}
