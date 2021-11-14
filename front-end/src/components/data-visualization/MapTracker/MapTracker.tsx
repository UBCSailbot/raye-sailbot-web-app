import React, {useState, useRef, useEffect} from 'react';
import MapView, { Marker, Polyline } from "react-native-maps";


interface MapTrackerProps {
    latitude: number,
    longitude: number
}

// export const MapTracker: React.FC<MapTrackerProps> = ({latitude, longitude}) => {
//     const [region, setRegion] = useState({
//         mapView: {
//             latitude: latitude,
//             longitude: longitude,
//             latitudeDelta: 0.0,
//             longitudeDelta: 0.0
//         },
//         allCoordinates: []
//     });

//     const _map = useRef(null);

    // useEffect(() => {
    //     if(_map.current) {
    //       _map.current.animateCamera(
    //         {
    //           center: {
    //             latitude: latitude,
    //             longitude: longitude
    //           },
    //           zoom: 15
    //         },
    //         5000
    //       );
    //     }
    // }, []);
    
//     return(
//         <MapView
//           style={{ flex: 1 }}
//           region={region}
//           onRegionChangeComplete={region => setRegion(region)}
//         >
//             <Polyline coordinates={[]} />
//         </MapView>
//     )
// }