import * as React from 'react';
import { DataTable, Table, TableHeader } from '../../../components/layout/data-visualization/DataTable/DataTable';
import { NavBar } from '../../../components/layout/navigation/NavBar/NavBar';
import {IMessageEvent, w3cwebsocket as W3CWebSocket} from "websocket";
import Box from '@mui/material/Box';
import axios from 'axios';
import { SelectionTable } from '../../../components/layout/data-visualization/SelectionTable/SelectionTable';
import { GraphLineChart } from '../../../components/layout/data-visualization/Graphs/LineChart';
import { SensorDataUtils } from '../../../utils/SensorDataUtils';
import { DocumentTable } from '../../../components/layout/data-visualization/DataTable/DocumentTable';

interface IProps {
    SERVER_NAME: string,
    WEBSOCKET_SERVER_NAME: string
}

interface IState {
    selectedTab: string,
    sensorDataTable: {
        [sensorType: string]: {
            headers: TableHeader,
            table: Table
        }
    }
    fetchedSensorData: []
}

export default class Sensors extends React.Component<IProps, IState> {
    ws: W3CWebSocket;

    constructor(props: IProps) {
        super(props);

        let initialState = {
            selectedTab: "wind",
            sensorDataTable: {},
            fetchedSensorData: []
        }

        // @ts-ignore
        this.state = (window.localStorage.getItem('state')) ? JSON.parse(window.localStorage.getItem('state')) : initialState;

        this.ws = new W3CWebSocket(this.props.WEBSOCKET_SERVER_NAME);
        this.fetchSensorData = this.fetchSensorData.bind(this);
    }

    async componentWillMount() {

        // Load in the all the model schemas from the backend if it's not stored locally. 
        if(!window.localStorage.getItem('state')) {
            await axios.get(this.props.SERVER_NAME + "/api/models")
                .then((res) => {
                    const allModels: any = res.data;
                    for (const model in allModels) {
                        this.setState({
                            ...this.state,
                            sensorDataTable: {
                                ...this.state.sensorDataTable,
                                [model]: {
                                    // headers: Object.keys(allModels[model]["properties"]).map((key) => {
                                    //     return (key.split("_").map(word => {return word.charAt(0).toUpperCase() + word.slice(1)})).join(' ');
                                    // }),
                                    headers: Object.keys(allModels[model]["properties"]),
                                    table: {}
                                }
                            }
                        });
                    } 
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // Open the websocket 
        this.ws.onopen = () => {
            console.log('Client websocket opened');
        };
        // Handle message when data is sent to the websocket 
        this.ws.onmessage = (event: IMessageEvent) => {
            const sensorData = JSON.parse(event.data.toString());

            if(!sensorData["sensor_id"] || !sensorData["sensor_type"]) {
                console.log("ERROR: the data requested from the websocket does not have an explicit sensor_id or sensor_type field");
                return; 
            }

            // If a specific time stamp was not sent, then set it automatically to the UTC time of when this data was received. 
            if (!("time_stamp" in sensorData)) {
                sensorData["time_stamp"] = new Date().toUTCString().slice(0, -3);
            }

            const {
                headers,
                table
            } = this.state.sensorDataTable[sensorData["sensor_type"]];

            let newTableData = table; 
            let newRow = [];

            for(let header of headers) {
                if (!(header in sensorData)) {
                    console.log(`ERROR: data field ${header} does not exist in the sensor data sent in from the websocket. Ensure that the model schemas are consistent with the Network Table Listener`);
                } else {
                    newRow.push(sensorData[header])
                }
            }
            
            newTableData[sensorData["sensor_id"]] = newRow;
            this.setState((prevState) => ({
                sensorDataTable: {
                    ...prevState.sensorDataTable,
                    [sensorData["sensor_type"]]: {
                        ...prevState.sensorDataTable[sensorData["sensor_type"]],
                        table: newTableData
                    }
                }
            }));
        }
    };

    async fetchSensorData() {
        let {
            selectedTab
        } = this.state;

        await axios.get(this.props.SERVER_NAME + `/api/sensors/${selectedTab}`)
            .then((res) => {
                const fetchedData: any = res.data;
                this.setState({
                    ...this.state,
                    fetchedSensorData: fetchedData 
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        const {
            sensorDataTable,
            selectedTab
        } = this.state;

        window.localStorage.setItem('state', JSON.stringify({selectedTab: selectedTab, sensorDataTable: sensorDataTable}));
    }

    render() {
        const {
            sensorDataTable,
            selectedTab,
            fetchedSensorData
        } = this.state;

        return(
            <div className="sensorPage">
                <NavBar 
                    tabs={Object.keys(sensorDataTable).map((key) => {return key.replace("_", " ")})} 
                    currentTab={selectedTab.replace("_", " ")}
                    handleChange={(tab: string) => this.setState({selectedTab: tab.replace(" ", "_")})}
                    tabStyle={{color: 'white', fontSize: '12px', fontWeight: 'bold', maxHeight: '15px'}}
                    tabsStyle={{
                        backgroundColor: '#44A7C4',
                    }}
                />
                <div className="dataTable">
                    <DataTable rowHeaders={sensorDataTable[selectedTab]?.headers || []} dataTable={sensorDataTable[selectedTab]?.table || []}/>
                </div>
                <div className="rowC" style={{display: "flex", flexDirection: "row"}}>
                    <Box component="span" sx={{ width: "100%", p: 1, border: '1px dashed grey' }}>
                        <GraphLineChart data={[{name: "test", pv: 50, uv: 100}]}/>
                    </Box>
                    <Box component="span" sx={{ width: "120%", p: 1, border: '1px dashed grey' }}>
                        <DocumentTable documentTable={fetchedSensorData || []}/>
                    </Box>
                    <Box component="span" sx={{ width: "80%", p: 1, border: '1px dashed grey' }}>
                        <SelectionTable 
                            onSearchClick={this.fetchSensorData}
                            lists={
                                {
                                    "Sensor Type": Object.keys(sensorDataTable[selectedTab].table), 
                                    "Columns": sensorDataTable[selectedTab].headers.filter((header: string) => {return header !== "sensor_type" && header !== "sensor_id" && header !== "timestamp"})
                                }
                            }
                        />
                    </Box>
                </div>
            </div>
        )
    }
}