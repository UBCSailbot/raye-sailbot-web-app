import { ISelector } from "../../../store/Plugin";
import { STORE_ALIAS as SensorDataListStoreAlias, ISensorDataListStoreState, defaultState } from "./SensorDataListTypes";

const getPluginState = (state: any) => ((state[SensorDataListStoreAlias] || defaultState) as ISensorDataListStoreState);

// export const getAllSensorData = (state: any) => getPluginState(state).allSensorData;
export const getError = (state: any) => getPluginState(state).error;
// export const getSelectedSensor = (state: any) => getPluginState(state).selectedSensor;
// export const getDBResults = (state: any) => getPluginState(state).dbResults;
export const getGPSCoordinates = (state: any) => getPluginState(state).gpsCoordinates;
export const getLoading = (state: any) => getPluginState(state).loading;
export const getGPSCoordinatePath = (state: any) => getPluginState(state).gpsPath;

const SensorDataListSelectors: ISelector[] = [
    getError,
    getGPSCoordinates,
    getGPSCoordinatePath
    // getLoading,
    // getError
];

export default SensorDataListSelectors;