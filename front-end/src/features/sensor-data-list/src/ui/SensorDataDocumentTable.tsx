import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import {connect} from "react-redux";
import { ISensorDataListStoreState, } from "../SensorDataListTypes";
import { DocumentTable } from "../../../../components/data-visualization/DataTable/DocumentTable";

export interface SensorDataDocumentTableProps extends WithStylesProps<typeof styles>, ISensorDataListStoreState, TActionTypes {
}

class SensorDataDocumentTableBase extends React.PureComponent<SensorDataDocumentTableProps> {
    render () {
        return (
            <DocumentTable 
                documentTable={this.props.dbResults[this.props.selectedSensor] || []}
            />
        );
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataDocumentTable = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataDocumentTableBase)
);