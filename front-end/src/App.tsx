import React from 'react';
import './App.css';
import { NavBar } from './components/layout/navigation/NavBar/NavBar';
import Sensors from './views/Dashboard/SensorDashboard/SensorsPage';

const SERVER_NAME: string = "http://127.0.0.1:8000";
const WEBSOCKET_SERVER_NAME: string = 'ws://127.0.0.1:8888/';

function App() {
  return (
    <div className="App">
      {/* <NavBar 
        tabs={['Sensors', 'Waypoints']} 
        handleChange={() => {}}
        tabsStyle={{}}
        tabStyle={{}}
      /> */}
      <Sensors SERVER_NAME={SERVER_NAME} WEBSOCKET_SERVER_NAME={WEBSOCKET_SERVER_NAME}/>
    </div>
  );
}

export default App;
