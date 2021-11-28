import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import { setSelectedSensorAction } from "./../SensorDataListActions";
import {connect} from "react-redux";
import { ISensorDataListUIState } from "../SensorDataListTypes";
import { SelectionTable } from "../../../../components/data-visualization/SelectionTable/SelectionTable";

export interface SensorDataSelectionProps extends WithStylesProps<typeof styles>, ISensorDataListUIState, TActionTypes {
}

class SensorDataSelectionTableBase extends React.PureComponent<SensorDataSelectionProps> {
    render () {
        return (
            <SelectionTable 
                onSearchClick={() => {}}
                setCriteria={() => {}}
                lists={
                    {
                        "sensors": Object.keys(this.props.allSensorData[this.props.selectedSensor]?.table || {}), 
                        "columns": this.props.allSensorData[this.props.selectedSensor]?.headers.filter((header: string) => {return header !== "sensor_type" && header !== "sensor_id" && header !== "timestamp"}) || []
                    }
                }
            />
        );
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataSelectionTable = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataSelectionTableBase)
);