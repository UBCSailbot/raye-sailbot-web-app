import * as React from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Box from '@material-ui/core/Box'
import Paper from '@mui/material/Paper';
import withStyles, { WithStylesProps } from "react-jss";
import { styles } from "./SensorPageStyle";
import { connect } from 'react-redux';
import { addPlugin } from '../../../store/Plugin';
import { GraphLineChart } from '../../../components/data-visualization/Graphs/LineChart';
import { DocumentTable } from '../../../components/data-visualization/DataTable/DocumentTable';
import {Criteria} from "../../../components/data-visualization/SelectionTable/SelectionTable";
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router";
import { SensorDataTable, SensorDataNavigation, SensorDataSelectionTable } from '../../../features/sensor-data-list';


export function withRouter( Child: any ) {
    return ( props: any ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
}
  
interface IProps {
}

interface IState {
}

class SensorDashboardViewBase extends React.PureComponent<IProps, IState> {
    // async fetchSensorData() {
    //     let {
    //         selectedTab
    //     } = this.state;

    //     await axios.get(this.props.SERVER_NAME + `/api/sensors/${selectedTab}`)
    //         .then((res) => {
    //             const fetchedData: any = res.data;
    //             this.setState({
    //                 ...this.state,
    //                 fetchedSensorData: fetchedData 
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return(
            <div className="sensorPage">
                <SensorDataNavigation />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ height: "25rem", width: "100%" }}> 
                                <SensorDataTable/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            <Paper sx={{ height: "17rem", width: "100%" }}> 
                                <DocumentTable documentTable={[]}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Paper sx={{ height: "17rem", width: "100%" }}> 
                                <SensorDataSelectionTable />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ height: "25rem", width: "100%" }}> 
                                <GraphLineChart data={[{name: "test", pv: 50, uv: 100}]}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addPlugin,
}

type TActionTypes = typeof mapDispatchToProps;

export const SensorDashboardView = withStyles(styles)(withRouter(connect(null, mapDispatchToProps)(SensorDashboardViewBase)));