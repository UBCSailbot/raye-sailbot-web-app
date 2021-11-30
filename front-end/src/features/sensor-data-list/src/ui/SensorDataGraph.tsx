import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import {connect} from "react-redux";
import { ISensorDataListStoreState, } from "../SensorDataListTypes";
import { GraphLineChart } from "../../../../components/data-visualization/Graphs/LineChart";

export interface SensorDataGraphProps extends WithStylesProps<typeof styles>, ISensorDataListStoreState, TActionTypes {
}

class SensorDataGraphBase extends React.PureComponent<SensorDataGraphProps> {
    render () {
        return (
            <GraphLineChart data={this.props.dbResults[this.props.selectedSensor] || []}/>
        );
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