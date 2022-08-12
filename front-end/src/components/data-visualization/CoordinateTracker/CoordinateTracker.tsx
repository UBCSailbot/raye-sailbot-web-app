import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

interface CoordinateProps {
    coordinates: any,
}

export const CoordinateTracker: React.FC<CoordinateProps> = ({coordinates}) => {
    const formatCoordinates = (coords: any) => {
        return coords.map((ele: any) => Object.assign({}, {lat: ele[0], lng: ele[1]}));
    }

    let path = formatCoordinates(coordinates);
    let currentLocation = path.at(-1);

    return (
        <Card sx={{width: "225px", height: "150px", position: "absolute", bottom: 40, left: 35}}>
            <CardContent>
                <Typography variant={"overline"} sx={{"fontSize": "16px"}}>
                    <span>&nbsp;&nbsp;</span>
                    {"Current Location:"}
                </Typography>
                <Typography sx={{"fontSize": "20px"}}>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    {"Latitude:"}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    {(currentLocation.lat).toFixed(2)}
                </Typography>
                <Typography sx={{"fontSize": "20px"}}>
                    {"Longitude:"}
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    {(currentLocation.lng).toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
};
