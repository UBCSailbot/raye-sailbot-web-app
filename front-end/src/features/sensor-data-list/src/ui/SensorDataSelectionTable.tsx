import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import { fetchSensorDataDBAction } from "./../SensorDataListActions";
import {connect} from "react-redux";
import { ISensorDataListStoreState } from "../SensorDataListTypes";
import { SelectionTable } from "../../../../components/data-visualization/SelectionTable/SelectionTable";

export interface SensorDataSelectionProps extends WithStylesProps<typeof styles>, ISensorDataListStoreState, TActionTypes {
}

class SensorDataSelectionTableBase extends React.PureComponent<SensorDataSelectionProps> {
    render () {
        return (
            <SelectionTable 
                onSearchClick={this._performQuery.bind(this)}
                selectedSensor={this.props.selectedSensor || ""}
                lists={
                    {
                        "sensors": Object.keys(this.props.allSensorData[this.props.selectedSensor]?.table || {}),  
                        "columns": this.props.allSensorData[this.props.selectedSensor]?.headers.filter((key) => key !== "sensor_id" && key !== "timestamp" && key !== "sensor_type") || [] 
                    }
                }
            />
        );
    }

    _performQuery(query: any) {
        this.props.fetchSensorDataDBAction({selectedSensor: this.props.selectedSensor, query: query})
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
    fetchSensorDataDBAction: fetchSensorDataDBAction.getReduxAction()
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataSelectionTable = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataSelectionTableBase)
);