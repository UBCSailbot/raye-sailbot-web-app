import * as React from 'react';
import { DataTable, Table, TableHeader } from '../../../components/layout/data-visualization/DataTable/DataTable';
import { NavBar } from '../../../components/layout/navigation/NavBar/NavBar';
import {IMessageEvent, w3cwebsocket as W3CWebSocket} from "websocket";
import axios from 'axios';


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
}

export default class Sensors extends React.Component<IProps, IState> {
    ws: W3CWebSocket;

    constructor(props: IProps) {
        super(props);

        let initialState = {
            selectedTab: "wind",
            sensorDataTable: {}
        }

        // @ts-ignore
        this.state = (window.localStorage.getItem('state')) ? JSON.parse(window.localStorage.getItem('state')) : initialState;

        this.ws = new W3CWebSocket(this.props.WEBSOCKET_SERVER_NAME);
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
            selectedTab
        } = this.state;

        return(
            <div>
                <NavBar 
                    tabs={Object.keys(sensorDataTable).map((key) => {return key.replace("_", " ")})} 
                    currentTab={selectedTab.replace("_", " ")}
                    handleChange={(tab: string) => this.setState({selectedTab: tab.replace(" ", "_")})}
                    tabStyle={{color: 'white', fontSize: '12px', fontWeight: 'bold', maxHeight: '15px'}}
                    tabsStyle={{
                        backgroundColor: '#44A7C4',
                    }}
                />
                <DataTable rowHeaders={sensorDataTable[selectedTab]?.headers || []} dataTable={sensorDataTable[selectedTab]?.table || []}/>
            </div>
        )
    }
}