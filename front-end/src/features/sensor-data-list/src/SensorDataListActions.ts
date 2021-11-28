import { call, delay, put, take } from 'redux-saga/effects';
import { Action } from '../../../store/ActionTools';
import { IActionList } from '../../../store/Plugin';
import { ISensorDataListStoreState, STORE_ALIAS as SensorDataListStoreAlias } from './SensorDataListTypes';
import { SensorDataListService } from './service/SensorDataListService';

export const init = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.INIT`)
    .addSaga( function * () {
        yield put(fetchAllModelsAction.getReduxAction()());
        yield put(openWebSocketChannelAction.getReduxAction()());
    })

const fetchAllModelsAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.FETCH_ALL_MODELS`)
    .addSaga(function * (action) { 
        try {
            const allModels = yield call(SensorDataListService.getAllModels);
            let allSensorDataListBase = {};
            for (const model in allModels) {
                allSensorDataListBase = {
                    ...allSensorDataListBase,
                    [model]: {
                        headers: Object.keys(allModels[model]["properties"]),
                        table: {}
                    }
                }
            } 
            yield put(fetchAllModelsSuccessAction.getReduxAction()({allSensorDataListBase}));
        } catch (e) {
            yield put(fetchAllModelsFailedAction.getReduxAction()({error: (e as Error).message}))
        }
    });

const fetchAllModelsSuccessAction = new Action<ISensorDataListStoreState, 
    {allSensorDataListBase: any}
    >(`${SensorDataListStoreAlias}.FETCH_ALL_MODELS_SUCCESS`)
    .addReducer((state, action) => ({
        ...state,
        allSensorData: action.payload.allSensorDataListBase
    }));

const fetchAllModelsFailedAction = new Action<ISensorDataListStoreState, 
    {error: string}
    >(`${SensorDataListStoreAlias}.FETCH_ALL_MODELS_FAILED`)
    .addReducer((state, action) => ({
        ...state,
        error: action.payload.error
    }));

const fetchSensorDataSuccessAction = new Action<ISensorDataListStoreState,
    {sensorData: any}
>(`${SensorDataListStoreAlias}.FETCH_SENSOR_DATA_SUCCESS`)
    .addReducer((state, action) => ({
        ...state,
        allSensorData: {
            ...state.allSensorData,
            [action.payload.sensorData["sensor_type"]]: {
                ...state.allSensorData[action.payload.sensorData["sensor_type"]],
                table: {
                    ...state.allSensorData[action.payload.sensorData["sensor_type"]].table,
                    [action.payload.sensorData["sensor_id"]]: state.allSensorData[action.payload.sensorData["sensor_type"]].headers.map((key) => action.payload.sensorData[key]) 
                }
            }
        }
    }))

const fetchSensorDataFailedAction = new Action<ISensorDataListStoreState, 
    {error: string}
    >(`${SensorDataListStoreAlias}.FETCH_SENSOR_DATA_FAILED`)
    .addReducer((state, action) => ({
        ...state,
        error: action.payload.error
    }));

const openWebSocketChannelAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.OPEN_WEBSOCKET`)
    .addSaga(function * () {
        const channel = yield call(SensorDataListService.websocketInitChannel)
        while(true) {
            const sensorData = yield take(channel);
            try {
                yield put(fetchSensorDataSuccessAction.getReduxAction()({sensorData}));
            } catch (e) {
                yield put(fetchSensorDataFailedAction.getReduxAction()({error: (e as Error).message}))
            }
        }
    });

export const setSelectedSensorAction = new Action<ISensorDataListStoreState,
    {selectedSensor: string}
    >(`${SensorDataListStoreAlias}.SET_SELECTED_SENSOR`)
    .addReducer((state, action) => ({
        ...state,
        selectedSensor: action.payload.selectedSensor
    }));

export const clearErrorAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.CLEAR_ERROR`)
    .addReducer((state, action) => ({
        ...state,
        error: undefined,
    }));

const SensorDataListActions: IActionList = {
    init, 
    fetchAllModelsAction,
    fetchAllModelsSuccessAction,
    fetchAllModelsFailedAction,
    fetchSensorDataFailedAction,
    fetchSensorDataSuccessAction,
    openWebSocketChannelAction,
    clearErrorAction,
    setSelectedSensorAction
}

export default SensorDataListActions;