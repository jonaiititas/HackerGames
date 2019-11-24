import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const formatData = (data /* could add keys to convert */) => {
    let formatedData = [];
    let element = {id: null, data: []};
    Object.keys(data[0]).forEach((property) => {
        if(property !== "name" && property !== "month"){
            element.id = property;
            data.forEach(item => {
                element.data.push({x: item.month, y: item[property]})
            });
            formatedData.push({...element});
            element.data = [];
        }
    });
    return formatedData;
};

const LineChart = ({d}) => {
console.log(formatData(d))

    return (
        <ResponsiveLine
            data={formatData(d)}
            stacked={true}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'time', format: '%Y-%m'}}
            xFormat="time:%Y-%m"
            yScale={{type: 'linear', stacked: true, min: 'auto', max: 'auto'}}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: '%Y %b',
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{scheme: 'nivo'}}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}
export default LineChart;