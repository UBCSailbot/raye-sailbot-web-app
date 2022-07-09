import * as React from 'react';
import axios from 'axios';
import { Grid, Typography, Stack } from '@mui/material';
import Box from '@material-ui/core/Box'
import {Button} from '@mui/material';
import withStyles, { WithStylesProps } from "react-jss";
import { styles } from "./SensorPageStyle";
import { connect } from 'react-redux';
import { addPlugin } from '../../../store/Plugin';
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router";
import SailbotLogo from "../../../SailbotLogo.png";
import { SensorDataMap } from '../../../features/sensor-data-list/src/ui/SensorDataMap';

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
                <div style={{backgroundColor: "white", height: "8vh"}}>
                    <Stack direction="row" spacing={2}>
                            {/* <img src={SailbotLogo} style={{width: "1.5%", height: "1.5%", marginLeft: "5rem", marginRight: "1rem", marginTop: "1"}}/> */}
                            <Typography variant="overline" sx={{ flexGrow: 1, marginLeft: "3rem", color: "#26619c", fontSize: "30px", fontWeight: "bold"}}>
                                UBC Sailbot  
                            </Typography>
                    </Stack>
                </div>
                <Box>
                    <SensorDataMap />
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