import React from "react";
import ReactMapboxGl from 'react-mapbox-gl';

export default function Map() {

    const MapboxMap = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiaWxsdW1pbmF0aWJvYXQiLCJhIjoiY2poMjh5eWRhMDFxODJxbXJuaXRvMmJtdCJ9.wiImXdAqSjsqZTaaG5VvXQ'
    });
    /*eslint-disable */
    return (
        <MapboxMap
            style="mapbox://styles/illuminatiboat/ck2sxxj8w2z8b1cp7l83sstqn"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
        >
        </MapboxMap>
    );
    /*eslint-enable */
}