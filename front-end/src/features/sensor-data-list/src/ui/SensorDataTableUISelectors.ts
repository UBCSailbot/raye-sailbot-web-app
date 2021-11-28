import { getAllSensorData, getError, getSelectedSensor } from "../SensorDataListSelectors";

export const getSelectors = (state: any) => {
    return {
        allSensorData: getAllSensorData(state),
        selectedSensor: getSelectedSensor(state),
        error: getError(state)
    }
}