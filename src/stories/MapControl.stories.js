import React from 'react';
import MapControl from "../MapControl";

export default {
    title: 'Map control buttons',
};

export const main = () => <MapControl toggle={{b1: {active:false}, b2: {active:false}}} toggleButton={() => {}} layers={[]} handleChange={() => {}}/>;
export const panelOpen = () => <MapControl toggle={{b1: {active:true}, b2: {active:false}}} toggleButton={() => {}} layers={{districts: true, culture: false, shops: true, transport: false, food: false, health: false}} handleChange={() => {}}/>;