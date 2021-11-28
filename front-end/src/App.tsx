import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { RouteMap } from './AppConstants';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider, LightTheme } from "baseui";
import { addPlugin } from './store/Plugin';
import { connect } from 'react-redux';
import { SensorDataList } from './features/sensor-data-list/src/SensorDataList';

const engine = new Styletron();

class App extends React.Component<typeof mapDispatchToProps> {
  constructor(props: typeof mapDispatchToProps) {
    super(props);

    this.props.addPlugin(SensorDataList);
  }

  render() {
    return (
      <Router>
        <StyletronProvider value={engine} debugAfterHydration>
          <BaseProvider theme={LightTheme}>
            <Routes>
              {Object.keys(RouteMap).map((path) => <Route path={path} key={path} element={RouteMap[path]}/>)}
            </Routes>
          </BaseProvider>
        </StyletronProvider>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  addPlugin
}

export default connect(null, mapDispatchToProps)(App);
