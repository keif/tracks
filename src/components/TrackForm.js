import React from "react"
import { Button, Input } from "react-native-elements"
import Spacer from "./Spacer"

const TrackForm = () => {
    return (
        <>
            <Spacer>
                <Input placeholder={`Enter Track Name`}/>
            </Spacer>
            <Button title={`Start Recording`}/>
        </>
    )
}

export default TrackForm
