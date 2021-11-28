import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import {clearErrorAction} from "./../SensorDataListActions";
import {connect} from "react-redux";
import { ISensorDataListUIState } from "../SensorDataListTypes";
import { DataTable } from "../../../../components/data-visualization/DataTable/DataTable";

export interface SensorDataTableProps extends WithStylesProps<typeof styles>, ISensorDataListUIState, TActionTypes {
}

class SensorDataTableBase extends React.PureComponent<SensorDataTableProps> {
    render () {
        return (
            <DataTable rowHeaders={this.props.allSensorData[this.props.selectedSensor]?.headers || []} dataTable={this.props.allSensorData[this.props.selectedSensor]?.table || []}/>
        );
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
    clearError: clearErrorAction.getReduxAction()
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataTable = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataTableBase)
);