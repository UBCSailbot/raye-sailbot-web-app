import { Typography } from '@mui/material';
import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any,
  sensorId: string,
  sensorData: any
}

/*
 So the data structure for the graphs will have to be like so:
 {
     name: "data start"
     [sensor_id_1]: val 
     [sensor_id_2]: val
     ...
     [sensor_id_n]: val
 }
*/

export const GraphLineChart: React.FC<LineChartProps> = ({data, sensorId, sensorData}) => {
    let colors = ["#26619c", "#D4AC0D", "#E74C3C", "#67C4FF", "#229954"];

    return (
      <>
        <Typography variant="overline" style={{fontSize: "12px", marginLeft: "50%"}}>
            {sensorId}
        </Typography>
        <ResponsiveContainer minWidth="undefined" minHeight="undefined">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 15,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" style={{fontSize: "12px"}}/>
              <YAxis />
              <Tooltip />
              <Legend />
              {sensorData.map((key: any, index: number) => <Line type="monotone" dataKey={key} stroke={colors[index % 4]} activeDot={{ r: 8 }} />)}
            </LineChart>
        </ResponsiveContainer>
      </>
    );
}