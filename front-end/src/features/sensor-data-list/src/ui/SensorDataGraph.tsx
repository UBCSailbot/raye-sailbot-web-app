import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import {connect} from "react-redux";
import { ISensorDataListStoreState, } from "../SensorDataListTypes";
import { GraphLineChart } from "../../../../components/data-visualization/Graphs/LineChart";
import { Tabs, Tab } from "@mui/material";

export interface SensorDataGraphProps extends WithStylesProps<typeof styles>, ISensorDataListStoreState, TActionTypes {
}

// export interface SensorDataGraphState {
//     selectedTab: any
// }

class SensorDataGraphBase extends React.PureComponent<SensorDataGraphProps> {
    // readonly state: SensorDataGraphState = {
    //     selectedTab: this._getSensorHeaders()[0] || ""
    // }

    render () {
        return (
            <>
                {/* <Tabs variant="scrollable" sx={{borderBottom: 1, borderColor: 'divider'}} onChange={(e, val: any) => this.setState({selectedTab: val})}>
                    { 
                        this._getSensorHeaders().map((key: any) => <Tab value={key} label={key}/>)
                    }
                </Tabs> */}
                {this._getAllSensorIds().map((sensorId: any) => 
                    <GraphLineChart data={this._getSensorIdData(sensorId)} sensorId={sensorId || ""} sensorData={this._getSensorHeaders()}/>
                )}
            </>
        );
    }

    _getSensorIdData(sensorId: string) {
        return this.props.dbResults[this.props.selectedSensor].filter((loggedData: any) => loggedData["sensor_id"] === sensorId) || [];
    }

    _getAllSensorIds() {
      return [...new Set(this.props.dbResults[this.props.selectedSensor]?.map((loggedData: any) => loggedData["sensor_id"]))].sort()
    }

    _getSensorHeaders() {
        return Object.keys(this.props.dbResults[this.props.selectedSensor][0] || {}).filter((key: any) => key !== "sensor_id" && key !== "timestamp" && key !== "sensor_type");
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataGraph = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataGraphBase)
);