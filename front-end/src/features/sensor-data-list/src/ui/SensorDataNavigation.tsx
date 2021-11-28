import React from "react";
import withStyles, { WithStylesProps} from "react-jss";
import { getSelectors } from "./SensorDataTableUISelectors";
import { setSelectedSensorAction } from "./../SensorDataListActions";
import {connect} from "react-redux";
import { ISensorDataListUIState } from "../SensorDataListTypes";
import { NavBar } from '../../../../components/navigation/NavBar/NavBar';

export interface SensorDataNavigationProps extends WithStylesProps<typeof styles>, ISensorDataListUIState, TActionTypes {
}

class SensorDataNavigationBase extends React.PureComponent<SensorDataNavigationProps> {
    render () {
        return (
            <NavBar 
                tabs={Object.keys(this.props.allSensorData).map((key) => key)} 
                currentTab={this.props.selectedSensor}
                handleChange={(tab: string) => this._setSelectedTab(tab)}
                tabStyle={{color: 'white', fontSize: '12px', fontWeight: 'bold', maxHeight: '15px'}}
                tabsStyle={{
                    backgroundColor: '#44A7C4',
                }}
            />
        );
    }

    _setSelectedTab(tab: string) {
        this.props.selectSensor({selectedSensor: tab})
    }
}

const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
    selectSensor: setSelectedSensorAction.getReduxAction()
}

type TActionTypes = typeof mapDispatchToProps;

const styles = {}

export const SensorDataNavigation = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SensorDataNavigationBase)
);