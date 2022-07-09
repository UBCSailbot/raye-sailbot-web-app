import { call, delay, put, select, take } from 'redux-saga/effects';
import { Action } from '../../../store/ActionTools';
import { IActionList } from '../../../store/Plugin';
import { ILoadingState, ISensorDataListStoreState, STORE_ALIAS as SensorDataListStoreAlias } from './SensorDataListTypes';
import { SensorDataListService } from './service/SensorDataListService';
import { getLoading } from './SensorDataListSelectors';

export const init = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.INIT`)
    .addSaga( function * (action) {
        // yield put(fetchAllModelsAction.getReduxAction()());
        yield put(pollSensorDataAction.getReduxAction()());
        // yield put(openWebSocketChannelAction.getReduxAction()());
    })

const pollSensorDataAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.POLL_SENSOR_DATA`)
    .addSaga(function * () {
        while(true) {
            const isLoading: ILoadingState = yield select(getLoading);
            if (isLoading === ILoadingState.NOT_LOADING) {
                // yield put(getGPSCoordinatesAction.getReduxAction()());
                yield put(getGPSCoordinatePathAction.getReduxAction()());
            }
            // Poll the network table every hour
            yield delay(3600000);
        }
    });

export const getGPSCoordinatesAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.GET_GPS_COORDINATES`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.GET_COORDINATES_LOADING
    }))
    .addSaga(function* (action) {
        try {
            yield delay(1000);
            const gpsCoordinates = yield call(SensorDataListService.getGPSCoordinates);
            yield put(getGPSCoordinatesActionSuccess.getReduxAction()({gpsCoordinates: gpsCoordinates})); 
        } catch (e) {
            yield put(getGPSCoordinatesActionFailed.getReduxAction()({error: (e as Error).message}))
        }
    })

export const getGPSCoordinatesActionSuccess = new Action<ISensorDataListStoreState,
    {gpsCoordinates: any}
>(`${SensorDataListStoreAlias}.GET_GPS_COORDINATES_SUCCESS`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.NOT_LOADING,
        gpsCoordinates: action.payload.gpsCoordinates
    }));


export const getGPSCoordinatesActionFailed = new Action<ISensorDataListStoreState,
    {error: string}
>(`${SensorDataListStoreAlias}.GET_GPS_COORDINATES_FAILED`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.NOT_LOADING,
        error: action.payload.error
    }));


export const getGPSCoordinatePathAction = new Action<ISensorDataListStoreState>(`${SensorDataListStoreAlias}.GET_GPS_PATH`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.GET_COORDINATES_LOADING
    }))
    .addSaga(function* (action) {
        try {
            yield delay(750);
            const gpsCoordinatePath = yield call(SensorDataListService.getGPSCoordinatePath);
            yield put(getGPSCoordinatePathActionSuccess.getReduxAction()({gpsPath: gpsCoordinatePath})); 
        } catch (e) {
            yield put(getGPSCoordinatePathActionFailed.getReduxAction()({error: (e as Error).message}))
        }
    });


export const getGPSCoordinatePathActionSuccess = new Action<ISensorDataListStoreState,
    {gpsPath: any}
>(`${SensorDataListStoreAlias}.GET_GPS_PATH_SUCCESS`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.NOT_LOADING,
        gpsPath: action.payload.gpsPath
    }));


export const getGPSCoordinatePathActionFailed = new Action<ISensorDataListStoreState,
    {error: string}
>(`${SensorDataListStoreAlias}.GET_GPS_PATH_FAILED`)
    .addReducer((state, action) => ({
        ...state,
        loading: ILoadingState.NOT_LOADING,
        error: action.payload.error
    }));


const SensorDataListActions: IActionList = {
    init, 
    pollSensorDataAction,
    getGPSCoordinatesAction,
    getGPSCoordinatesActionSuccess,
    getGPSCoordinatesActionFailed,
    getGPSCoordinatePathAction,
    getGPSCoordinatePathActionFailed,
    getGPSCoordinatePathActionSuccess
}

export default SensorDataListActions;