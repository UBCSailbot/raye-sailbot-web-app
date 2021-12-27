import * as React from 'react';
import axios from 'axios';
import { Grid, Typography, Stack } from '@mui/material';
import Box from '@material-ui/core/Box'
import Paper from '@mui/material/Paper';
import withStyles, { WithStylesProps } from "react-jss";
import { styles } from "./SensorPageStyle";
import { connect } from 'react-redux';
import { addPlugin } from '../../../store/Plugin';
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router";
import { SensorDataTable, SensorDataNavigation, SensorDataSelectionTable } from '../../../features/sensor-data-list';
import { SensorDataDocumentTable } from '../../../features/sensor-data-list/src/ui/SensorDataDocumentTable';
import { SensorDataGraph } from '../../../features/sensor-data-list/src/ui/SensorDataGraph';
import SailbotLogo from "../../../SailbotLogo.png";

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
    render() {
        return(
            <div className="sensorPage" style={{backgroundColor: "white"}}>
                <div style={{backgroundColor: "#26619c"}}>
                    <Stack direction="row" spacing={2}>
                            <img src={SailbotLogo} style={{width: "1.5%", height: "1.5%", marginLeft: "5rem", marginRight: "1rem", marginTop: "0.5rem"}}/>
                            <Typography variant="overline" sx={{ flexGrow: 1, marginLeft: "3rem", color: "white", fontSize: "30px"}}>
                                UBC Sailbot Dashboard 
                            </Typography>
                            <Box component="span" sx={{ p: 2}}>
                                <SensorDataNavigation />
                            </Box>
                    </Stack>
                </div>
                <Box style={{marginTop: "1rem"}}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={12} style={{height: "15rem"}}>
                            <Typography variant="overline" sx={{ marginLeft: "2rem", color: "white", fontSize: "15px", backgroundColor: "gray", borderWidth: "4px", borderStyle: "solid", borderColor: "gray"}}>
                                Live Monitor
                            </Typography>
                            <Paper sx={{ height: "100%", width: "98%", margin: "auto"}} elevation={1} variant="outlined"> 
                                <SensorDataTable/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={9} style={{marginTop: "4rem"}}>
                            <Typography variant="overline" sx={{ marginLeft: "2rem", color: "white", fontSize: "15px", backgroundColor: "gray", borderWidth: "4px", borderStyle: "solid", borderColor: "gray"}}>
                                Results
                            </Typography>
                            <Paper sx={{ height: "15rem", width: "98.6%", marginLeft: "1.4rem"}} variant="outlined"> 
                                <SensorDataDocumentTable />
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3} style={{marginTop: "4rem"}}>
                            <Typography variant="overline" sx={{ marginLeft: "1rem", color: "white", fontSize: "15px", backgroundColor: "gray", borderWidth: "4px", borderStyle: "solid", borderColor: "gray"}}>
                                Database Query
                            </Typography>
                            <Paper sx={{ height: "15rem", width: "96%", marginRight: "auto"}} variant="outlined"> 
                                <SensorDataSelectionTable />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} style={{marginTop: "2rem"}}>
                            <div style={{ height: "25rem", width: "98%", margin: "auto"}}> 
                                <SensorDataGraph />
                            </div>
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