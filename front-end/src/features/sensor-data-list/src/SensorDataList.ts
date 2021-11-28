import { IPlugin } from "../../../store/Plugin";
import SensorDataListActions from "./SensorDataListActions";
import SensorDataListSelectors from "./SensorDataListSelectors";
import { defaultState, STORE_ALIAS as SensorDataListAlias } from "./SensorDataListTypes";

export const SensorDataList: IPlugin = {
    alias: SensorDataListAlias,
    defaultState,
    actions: SensorDataListActions,
    selectors: SensorDataListSelectors,
    childPlugins: []
}