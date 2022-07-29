import React, { useEffect, useState } from "react";
import {GoogleMap, useLoadScript, Marker, Polyline} from '@react-google-maps/api';
import axios from "axios";
import { ILoadingState } from "../../../features/sensor-data-list/src/SensorDataListTypes";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from "@mui/material";


interface MapProps {
    coordinates: any,
    isLoadingGPS: ILoadingState
}

export const MapTracker: React.FC<MapProps> = ({coordinates, isLoadingGPS}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBqZCM3oeRw9SAhv7gpHCEhZyyEWtKblSk"
    })

    if (!isLoaded || isLoadingGPS) return (
        <Box sx={{display: "flex", justifyContent:'center', alignItems:'center', height: '100vh', marginTop: "-5rem"}}>
            <CircularProgress size={"5rem"}/>
            {/* <Typography sx={{fontSize: "1.5rem"}}>
                Loading
            </Typography> */}
        </Box>
    )

    const formatCoordinates = (coords: any) => {
        return coords.map((ele: any) => Object.assign({}, {lat: ele[0], lng: ele[1]}));
    }

    let path = formatCoordinates(coordinates);
    let marker = path.at(-1);

    return (
    <GoogleMap zoom={4.5} center={{lat: 37.28, lng: -145.12}} mapContainerStyle={{width: "100%", height: "92vh"}}>
        <Polyline path={path}/>
        {/* <Marker position={{lat: 49.28, lng: -123.12}}></Marker> */}
        <Marker position={marker}></Marker>
        {/* <Marker position={{lat: 21.31, lng: -157.8}}></Marker> */}
        {/* <Marker position={coordinates}></Marker> */}
    </GoogleMap>
    );
};
