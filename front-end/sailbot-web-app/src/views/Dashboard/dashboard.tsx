import * as React from 'react';
import { DataTable } from '../../components/layout/data-visualization/DataTable/DataTable';
import { NavBar } from '../../components/layout/navigation/NavBar/NavBar';

export default class Dashboard extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar tabs={['winch', 'wind', 'ais']} title={'Welcome to the Sailbot Navigation Dashboard'}/>
                <DataTable rowHeaders={['SensorID', 'Temperature', 'Speed']} allData={[[0, 12, 14], [1, 15, 12]]}/>
            </div>
        )
    }
}