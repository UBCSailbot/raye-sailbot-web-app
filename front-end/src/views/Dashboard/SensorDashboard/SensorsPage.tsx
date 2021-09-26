import * as React from 'react';
import { DataTable, Table, TableHeader } from '../../../components/layout/data-visualization/DataTable/DataTable';
import { NavBar } from '../../../components/layout/navigation/NavBar/NavBar';
import {IMessageEvent, w3cwebsocket as W3CWebSocket} from "websocket";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';


interface IProps {
}

interface IState {
    selectedTab: string,
    dataTable: {
        [sensorType: string]: {
            headers: TableHeader,
            table: Table
        }
    }
}

export default class Sensors extends React.Component<IProps, IState> {
    ws: W3CWebSocket;

    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedTab: "wind",
            dataTable: {
                wind: {
                    headers: [
                        'SensorID', 
                        'Speed', 
                        'Direction', 
                        'Reference', 
                        'Wind Temperature', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 20, 'east', 'N/A', 20, 1, 12, 24, 'ON'],
                        [1, 20, 'east', 'N/A', 20, 1, 12, 24, 'ON']
                    ]
                },
                winch: {
                    headers: [
                        'SensorID', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 20, 24, 50, 'ON'],
                        [0, 20, 24, 50, 'ON']
                    ]
                },
                boom_angle: {
                    headers: [
                        'SensorID', 
                        'Angle', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 60, 24, 50, 25, 'ON'],
                        [0, 60, 24, 50, 25, 'ON']
                    ]
                },
                rudder_motor: {
                    headers: [
                        'SensorID', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 60, 24, 50, 'ON'],
                        [0, 60, 24, 50, 'ON']
                    ]
                },
                accelerometer: {
                    headers: [
                        'SensorID', 
                        'X-Position', 
                        'Y-Position', 
                        'Z-Position', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 1.2, 2.5, 1.4, 24, 50, 1, 'ON'],
                        [0, 1.2, 2.5, 1.4, 24, 50, 1, 'ON']
                    ]
                },
                bms: {
                    headers: [
                        'SensorID', 
                        'Battery Current', 
                        'Battery Voltage', 
                        'Battery Temperature', 
                        'Current', 
                        'Voltage', 
                        'Temperature', 
                        'Status'
                    ],
                    table: [
                        [0, 2.2, 3.5, 5.4, 24, 50, 11, 'ON'],
                        [0, 2.2, 3.5, 5.4, 24, 50, 11, 'ON']
                    ]
                }
            }
        };

        this.ws = new W3CWebSocket('ws://127.0.0.1:8888/');
    }

    componentWillMount() {
        this.ws.onopen = () => {
            console.log('Client websocket opened');
        };
        this.ws.onmessage = (event: IMessageEvent) => {
            const sensorData = JSON.parse(event.data.toString());

            const {
                headers,
                table
            } = this.state.dataTable[sensorData.sensor_type];

            let newCopyTableData = table; 
            let newRow = [];
            for(let header of headers) {
                newRow.push(sensorData.data[header])
            }
            newCopyTableData[sensorData.data["SensorID"]] = newRow;

            this.setState(prevState => ({
                dataTable: {
                    ...prevState.dataTable,
                    [sensorData.sensor_type]: {
                        ...prevState.dataTable[sensorData.sensor_type],
                        table: newCopyTableData
                    }
                }
            }));
        };
    }

    render() {
        const {
            dataTable,
            selectedTab
        } = this.state;

        return(
            <div>
                <NavBar 
                    tabs={['wind', 'winch', 'boom angle', 'rudder motor', 'accelerometer', 'bms']} 
                    handleChange={(tab: string) => this.setState({selectedTab: tab.replace(" ", "_")})}
                    tabStyle={{color: 'white', fontSize: '12px', fontWeight: 'bold', maxHeight: '15px'}}
                    tabsStyle={{
                        backgroundColor: '#44A7C4',
                    }}
                />
                <DataTable rowHeaders={dataTable[selectedTab].headers} dataTable={dataTable[selectedTab].table}/>
            </div>
        )
    }
}