import React, {useState, useEffect} from 'react'
import {StaticMap} from "react-map-gl";
import DeckGL, {HeatmapLayer, GeoJsonLayer, HexagonLayer} from "deck.gl";
import {featureEach} from "@turf/meta";
import centroid from "@turf/centroid";
import LayerControl from "./LayerControl";
import styled from "styled-components";

const token = process.env.REACT_APP_TOKEN;


const data = require("./shops.json");
let pointData = {
    "type": "FeatureCollection",
    "features": []
};
const calcPoints = () => {
    featureEach(data, (f, i) => {
        if (f.geometry.type === 'Polygon') {
            console.log("found polygon");
            let pf = centroid(f, {properties: {...f.properties}});
            pointData.features.push(pf);
        } else {
            console.log(f.geometry.type);
            pointData.features.push(f);
        }
    });
};

export default function Map() {

    // Remember to add new props for each layer
    const [toggleLayers, setLayers] = useState({geojson: true, heatmap: true, hexagon: false});
    const [viewState, setViewState] = useState({
        latitude: 55.689525,
        longitude: 21.193660,
        zoom: 11,
        pitch: 0
    });
    useEffect(() => {
        calcPoints();
    }, [])

    // Turns out, conditional rendering with if is preffered over setting 'visible' prop (docs)
    const layers = [
        new GeoJsonLayer({
            id: 'geojson-layer',
            data: data,
            visible: toggleLayers.geojson,
            pickable: true,
            stroked: true,
            filled: true,
            lineWidthScale: 2,
            lineWidthMinPixels: 1,
            getLineColor: [160, 160, 180, 200],
            getFillColor: [160, 255, 180, 200],
            getRadius: 10,
            getLineWidth: 1,
        }),
        new HeatmapLayer({
            id: 'heatmapLayer',
            visible: toggleLayers.heatmap,
            data: pointData.features,
            intensity: 3,
            radiusPixels: 40,
            colorRange: [[255, 255, 204, 150], [199, 233, 180, 150], [127, 205, 187, 150], [65, 182, 196, 150], [44, 127, 184, 150], [37, 52, 148, 150]],
            getPosition: d => d.geometry.coordinates,
        }),
        new HexagonLayer({
            id: 'hexagon-layer',
            data: pointData.features,
            visible: toggleLayers.hexagon,
            pickable: true,
            extruded: true,
            radius: 200,
            elevationScale: 4,
            getPosition: d => d.geometry.coordinates,
        }),
    ];
    const handleChange = (e, l) => {
        if (l === "hexagon" && !toggleLayers.hexagon) {
            setViewState({...viewState, pitch: 50});
        } else {
            setViewState({...viewState, pitch: 0});
        }
        let newState = !toggleLayers[l];
        setLayers({...toggleLayers, [l]: newState});
    };
    //TODO: this works really slow...
    /*const _onViewStateChange = ({viewState}) => {
        console.log(viewState);
        setViewState({...viewState});
    }*/

    const MapWrapper = styled.div`
        position: relative;
        height: 100%
    `;
    return (
        <MapWrapper>
            <DeckGL
                controller={true}
                initialViewState={viewState}
                viewState={viewState}
                layers={layers}
                // onViewStateChange={_onViewStateChange}
            >
                <StaticMap preventStyleDiffing={true} reuseMaps mapboxApiAccessToken={token}
                           mapStyle="mapbox://styles/illuminatiboat/ck2sxxj8w2z8b1cp7l83sstqn"/>
            </DeckGL>
            {/*<DeckGL {...viewport} layers={[searchResultLayer]}/>*/}
            <LayerControl layers={toggleLayers} handleChange={handleChange}/>

        </MapWrapper>
    )
}
