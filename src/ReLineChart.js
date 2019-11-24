import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import React from 'react';


const ReLineChart = ({data, set}) => (
    <LineChart width={600} height={300} data={data}>
        <Line key={set} type="monotone" dataKey={set} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
    </LineChart>
);
export default ReLineChart;