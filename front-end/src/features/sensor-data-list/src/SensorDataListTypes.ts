import { TableHeader, Table } from "../../../models/DataTable";

export const STORE_ALIAS = "SensorDataList";

export type SensorDataList = {
    [sensorType: string]: {
        headers: TableHeader,
        table: Table
    }
};

export enum ILoadingState {
    NOT_LOADING,
    GET_COORDINATES_LOADING
}

export interface ISensorDataListUIState {
    error?: string,
    loading: ILoadingState,
    gpsPath: any,
    gpsCoordinates: any
}

export interface ISensorDataListStoreState {
    gpsCoordinates: any, 
    error?: string,
    gpsPath: any,
    loading: ILoadingState
}

export const defaultState: ISensorDataListStoreState = {
    gpsCoordinates: {lat: 49.28, lng: -123.12},
    gpsPath: [[49.28, -123.12]],
    loading: ILoadingState.NOT_LOADING
}