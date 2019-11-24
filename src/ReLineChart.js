import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush} from 'recharts';
import React from 'react';
import moment from 'moment'


const ReLineChart = ({data, set, label}) => {
    const myArray = [
        "#4E79A7",
        "#F28E2C",
        "#E15759",
        "#76B7B2",
        "#59A14F",
        "#EDC949",
        "#AF7AA1",
        "#FF9DA7",
        "#9C755F",
        "#BAB0AB"];

    const getColor = myArray[Math.floor(Math.random() * myArray.length)];
    moment.locale("lt")
    return (
        <ResponsiveContainer width="90%" height={300}>
            <LineChart data={data}>
                <CartesianGrid stroke="#ccc"/>
                <Line key={set} strokeWidth={2.5} type="monotone" dataKey={set} stroke={getColor}/>
                <XAxis dataKey="month" tickFormatter={(label) => moment(label.toString(), "YYYYMM").format("YYYY-MM")}/>
                <YAxis />
                <Tooltip formatter={(value, name) => ([value.toString() + " €", label])}
                         labelFormatter={(label) => moment(label.toString(), "YYYYMM").format("YYYY MMM")}/>
                <Brush/>
            </LineChart>
        </ResponsiveContainer>
    );
}
export default ReLineChart;