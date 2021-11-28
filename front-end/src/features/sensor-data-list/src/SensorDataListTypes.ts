import { TableHeader, Table } from "../../../models/DataTable";

export const STORE_ALIAS = "SensorDataList";

export type SensorDataList = {
    [sensorType: string]: {
        headers: TableHeader,
        table: Table
    }
};

export interface ISensorDataListUIState {
    allSensorData: SensorDataList,
    selectedSensor: string,
    error?: string
}

export interface ISensorDataListStoreState {
    allSensorData: SensorDataList, 
    selectedSensor: string,
    error?: string
}

export const defaultState: ISensorDataListStoreState = {
    allSensorData: {},
    selectedSensor: "wind"
}