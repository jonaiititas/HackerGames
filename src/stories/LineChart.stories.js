import React from 'react';
import LineChart from "../LineChart";
import data from "../airarit.json"

export default {
    title: 'Nivo Line Chart',
};

export const line = () => <div style={{height:"600px"}}><LineChart d={data} /></div>;