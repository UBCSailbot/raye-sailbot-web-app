import { getAllSensorData, getDBResults, getError, getSelectedSensor } from "../SensorDataListSelectors";

export const getSelectors = (state: any) => {
    return {
        allSensorData: getAllSensorData(state),
        selectedSensor: getSelectedSensor(state),
        dbResults: getDBResults(state),
        error: getError(state)
    }
}