import { getError, getGPSCoordinatePath, getGPSCoordinates, getLoading} from "../SensorDataListSelectors";

export const getSelectors = (state: any) => {
    return {
        error: getError(state),
        gpsCoordinates: getGPSCoordinates(state),
        gpsPath: getGPSCoordinatePath(state),
        loading: getLoading(state)
    }
}