import { ISelector } from "../../../store/Plugin";
import { STORE_ALIAS as SensorDataListStoreAlias, ISensorDataListStoreState, defaultState } from "./SensorDataListTypes";

const getPluginState = (state: any) => ((state[SensorDataListStoreAlias] || defaultState) as ISensorDataListStoreState);

export const getAllSensorData = (state: any) => getPluginState(state).allSensorData;
export const getError = (state: any) => getPluginState(state).error;
export const getSelectedSensor = (state: any) => getPluginState(state).selectedSensor;

const SensorDataListSelectors: ISelector[] = [
    getAllSensorData,
    getError,
    getSelectedSensor
];

export default SensorDataListSelectors;