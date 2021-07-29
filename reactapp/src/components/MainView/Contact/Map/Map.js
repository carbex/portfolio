import React from 'react'
import * as S from './Map.styles'
import Marker from './Marker/Marker';
import GoogleMapReact from 'google-map-react';

function Map() {

    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const infos = {
        map: {
            key: `${googleApiKey}`,
            center: {
                lat: 48.830168,
                lng: 2.233392
            },
            zoom: 14
        },
        marker: {
            position: {
                lat: 48.830168,
                lng: 2.233392
            },
            name: 'Alex',
            color: '#ff4d4d'
        }
    };

    return (
        <S.Container>
            <GoogleMapReact
                bootstrapURLKeys={{ key: infos.map.key }}
                defaultCenter={infos.map.center}
                defaultZoom={infos.map.zoom}
            >
                <Marker
                    lat={infos.marker.position.lat}
                    lng={infos.marker.position.lng}
                    name={infos.marker.name}
                    color={infos.marker.color}
                />
            </GoogleMapReact>
        </S.Container>
    )
}

export default Map
