import React from 'react';
import './App.css';
import { NavBar } from './components/layout/navigation/NavBar/NavBar';
import Sensors from './views/Dashboard/SensorDashboard/SensorsPage';

function App() {
  return (
    <div className="App">
      {/* <NavBar 
        tabs={['Sensors', 'Waypoints']} 
        handleChange={() => {}}
        tabsStyle={{}}
        tabStyle={{}}
      /> */}
      <Sensors />
    </div>
  );
}

export default App;
