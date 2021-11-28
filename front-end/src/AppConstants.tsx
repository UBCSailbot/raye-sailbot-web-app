import * as React from 'react';
import {SensorDashboardView} from './views/Dashboard/Dashboard/Dashboard';

export enum RoutePath {
	DASHBOARD = "/",
}; 

const SERVER_NAME: string = "http://127.0.0.1:8000";
const WEBSOCKET_SERVER_NAME: string = 'ws://127.0.0.1:8888/';

export const RouteMap: { [path: string]: JSX.Element } = {
	[RoutePath.DASHBOARD]: <SensorDashboardView WEBSOCKET_SERVER_NAME={WEBSOCKET_SERVER_NAME} SERVER_NAME={SERVER_NAME}/>,
};