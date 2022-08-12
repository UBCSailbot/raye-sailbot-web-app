import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import {connect} from "react-redux";
import { ISensorDataListStoreState, ISensorDataListUIState} from "../SensorDataListTypes";
import {MapTracker} from "../../../../components/data-visualization/MapTracker/MapTracker";
import { CoordinateTracker } from "../../../../components/data-visualization/CoordinateTracker/CoordinateTracker";

export interface SensorDataMapProps extends WithStylesProps<typeof styles>, ISensorDataListUIState, TActionTypes {
}

class SensorDataMapBase extends React.PureComponent<SensorDataMapProps> {
    render () {
        return (
            <>  
                <div style={{position: "relative"}}>
                    <MapTracker 
                        coordinates={this.props.gpsPath}
                        isLoadingGPS={this.props.loading}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataMap = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataMapBase)
);