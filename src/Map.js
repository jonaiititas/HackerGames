import React, {useState, useEffect} from 'react'
import {StaticMap} from "react-map-gl";
import DeckGL, {GeoJsonLayer} from "deck.gl";
import {featureEach} from "@turf/meta";
import within from "@turf/points-within-polygon";
import centroid from "@turf/centroid";
import MapControl from "./MapControl";
import styled from "styled-components";
import districts from "./districts.json";
import shops from "./shops.json";
import culture from "./kultūra.json";
import food from "./maitinimas.json";
import transport from "./transportas.json";
import health from "./sveikata.json";
import {scaleThreshold} from 'd3-scale';
import {featureCollection} from "@turf/helpers";
import {Modal, ModalBody, ModalHeader} from "shards-react";

const token = process.env.REACT_APP_TOKEN;

let pointData = {
    "type": "FeatureCollection",
    "features": []
};

const COLOR_SCALE = scaleThreshold()
    .domain([0, 2, 4, 8, 12, 16, 20, 25, 30, 35])
    .range([[247,252,240, 100],[224,243,219, 100],[204,235,197, 100],[168,221,181, 100],[123,204,196, 100],[78,179,211, 100],[43,140,190, 100],[8,104,172, 100],[8,64,129, 100]]);

const calcPoints = (features) => {
    featureEach(features, (f, i) => {
        if (f.geometry.type === 'Polygon') {
            console.log("found polygon");
            let pf = centroid(f, {properties: {...f.properties}});
            pointData.features.push(pf);
        } else {
            pointData.features.push(f);
        }
    });
};

export default function Map() {

    const getData = (name) => {
        switch (name) {
            case "shops":
                return pointData;
            case "culture":
                return culture;
            case "food":
                return food;
            case "transport":
                return transport;
            case "health":
                return health;
            default:
                return null
        }
    };
    // Remember to add new props for each layer
    const [toggleLayers, setLayers] = useState({districts: true, culture: false, shops: false, transport: false, food: false, health: false});
    // const [tooltipState, setTooltip] = useState(null);
    const [viewState, setViewState] = useState({
        latitude: 55.689525,
        longitude: 21.193660,
        zoom: 11,
        pitch: 0
    });
    const [toggleLC, setToggle] = useState({b1: {active:false}, b2: {active:false}});

    const toggleButton = (key) => {
        setToggle({...toggleLC, [key]: {...toggleLC[key], active: !toggleLC[key].active}});
    };

        const [open, toggle] = useState(false)


    const getDistrictsColor = (polygon, heightInstead=false) => {
       let arr = [];
       Object.entries(toggleLayers).forEach(l => {
           if(l[1] && l[0] !== "districts"){
               arr.push(...getData(l[0]).features);
           }
       });
       // console.log(arr);
       const fc = featureCollection(arr);
       // console.log(fc);
        let inside = within(fc, polygon);
        if(heightInstead){
            return 100 * Object.keys(inside.features).length
        }
        // console.log(Object.keys(inside.features).length,COLOR_SCALE(Object.keys(inside.features).length));
        return COLOR_SCALE(Object.keys(inside.features).length);
   };
    useEffect(() => {
        calcPoints(shops);
    }, []);

    // Turns out, conditional rendering with if is preffered over setting 'visible' prop (docs)
    const renderLayers = () =>{
        return [
        new GeoJsonLayer({
            id: 'district-layer',
            data: districts,
            visible: toggleLayers.districts,
            pickable: true,
            extruded: true,
            getElevation: p => getDistrictsColor(p, true),
            stroked: true,
            filled: true,
            lineWidthScale: 2,
            lineWidthMinPixels: 1,
            getLineColor: [40, 40, 40, 100],
            getFillColor: p => getDistrictsColor(p),
            getRadius: 10,
            getLineWidth: 1,
            autoHighlight: true,
            onClick: (info, event) => toggle(!open)
        }),
            new GeoJsonLayer({
                id: 'shops-layer',
                data: pointData,
                visible: toggleLayers.shops,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 1,
                getLineColor: [160, 245, 23, 200],
                getFillColor: [63, 255, 180, 150],
                getRadius: 10,
                getLineWidth: 1,
            }),
            new GeoJsonLayer({
                id: 'health-layer',
                data: health,
                visible: toggleLayers.health,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 1,
                getLineColor: [43, 160, 234, 200],
                getFillColor: [160, 255, 32, 150],
                getRadius: 10,
                getLineWidth: 1,
            }),
            new GeoJsonLayer({
                id: 'transport-layer',
                data: transport,
                visible: toggleLayers.transport,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 1,
                getLineColor: [99, 200, 10, 200],
                getFillColor: [33, 34, 180, 150],
                getRadius: 10,
                getLineWidth: 1,
            }),
            new GeoJsonLayer({
                id: 'food-layer',
                data: food,
                visible: toggleLayers.food,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 1,
                getLineColor: [102, 34, 53, 200],
                getFillColor: [23, 45, 180, 150],
                getRadius: 10,
                getLineWidth: 1,
            }),
            new GeoJsonLayer({
                id: 'culture-layer',
                data: culture,
                visible: toggleLayers.culture,
                pickable: true,
                stroked: true,
                filled: true,
                lineWidthScale: 2,
                lineWidthMinPixels: 1,
                getLineColor: [102, 34, 53, 200],
                getFillColor: [23, 45, 180, 150],
                getRadius: 10,
                getLineWidth: 1,
            })
    ];
    };
    const handleChange = (e, l) => {
        if (l === "hexagon" && !toggleLayers.hexagon) {
            setViewState({...viewState, pitch: 50});
        } else {
            setViewState({...viewState, pitch: 0});
        }
        let newState = !toggleLayers[l];
        setLayers({...toggleLayers, [l]: newState});
    };

    const MapWrapper = styled.div`
        position: relative;
        height: 100%
    `;
    return (
        <MapWrapper>
            <DeckGL
                controller={true}
                initialViewState={viewState}
                layers={renderLayers()}
            >
                <StaticMap preventStyleDiffing={true} reuseMaps mapboxApiAccessToken={token}
                           mapStyle="mapbox://styles/illuminatiboat/ck2sxxj8w2z8b1cp7l83sstqn"/>
                {/*{renderTooltip}*/}
            </DeckGL>
            {/*<DeckGL {...viewport} layers={[searchResultLayer]}/>*/}
            <MapControl toggle={toggleLC} toggleButton={toggleButton} layers={toggleLayers} handleChange={handleChange}/>
            <Modal size="lg" open={open} toggle={() => toggle(!open)}>
                <ModalHeader>Zona 5</ModalHeader>
                <ModalBody style={{overflow: "scroll"}}>
                </ModalBody>
            </Modal>

        </MapWrapper>
    )
}
