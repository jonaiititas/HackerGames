import React from 'react';
import LineChart from "../LineChart";
import data from "../airarit.json"
import {select, withKnobs} from '@storybook/addon-knobs';
import ReLineChart from "../ReLineChart";

export default {
    title: 'Line Charts',
    decorators: [withKnobs]
};



export const nivo = () => {
    const options = {
        'employees': 0,
        'wages': 1
    };
    const value = select("Dataset", options, 0, "001");

    return(<div style={{height:"600px"}}><LineChart d={data} set={value} /></div>)
};
export const rechart = () => {
    const options = {
        'employees': "numInsured",
        'wages': "avgWage"
    };
    const value = select("Dataset", options, "numInsured", "001");

    return(<ReLineChart data={data} set={value} />)
};