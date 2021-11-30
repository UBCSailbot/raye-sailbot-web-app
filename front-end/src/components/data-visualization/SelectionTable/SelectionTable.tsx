import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface SelectionTableProps {
    lists: {
        [ListName: string]: string[]
    }
    onSearchClick: (query: any) => Promise<any> | any;
    selectedSensor: string
}

// Hook
function usePrevious(value: any) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]); 
  return ref.current;
}


export const SelectionTable: React.FC<SelectionTableProps> = ({lists, onSearchClick, selectedSensor}) => {
    const [selectedDates, setSelectedDates] = React.useState<DateRange<Date>>([null, null]);
    const [selectedSensors, setSelectedSensors] = React.useState<string[]>([]);
    const [selectedColumns, setSelectedColumns] = React.useState<string[]>([]);

    const prevSelectedSensor = usePrevious(selectedSensor);

    const query = {
      "sensor_type": selectedSensor,
      "sensors": ["wind_sensor_1", "wind_sensor_2", "wind_sensor_3"],
      "columns": ["sensor_id", ...selectedColumns],
      "dates": selectedDates
    };

    React.useEffect(() => {
      if(prevSelectedSensor !== selectedSensor) {
        setSelectedDates([null, null]);
        setSelectedSensors([]);
        setSelectedColumns([]);
      }
    });

    return (
      <TableContainer component={Paper} style={{height: "100%"}}>
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography>
                  {"Query the Database"}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell colSpan={2}>
                  <Autocomplete
                    multiple
                    size="small"
                    id="multiple-limit-tags"
                    options={lists["sensors"]}
                    getOptionLabel={(option) => option}
                    value={selectedSensors}
                    defaultValue={[]}
                    onChange={(e, val) => setSelectedSensors(val)}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" label={"sensors"} placeholder=""/>
                    )}
                  />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>
                  <Autocomplete
                    multiple
                    size="small"
                    id="multiple-limit-tags"
                    options={lists["columns"]}
                    getOptionLabel={(option) => option}
                    value={selectedColumns}
                    defaultValue={[]}
                    onChange={(e, val) => setSelectedColumns(val)}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" label={"columns"} placeholder=""/>
                    )}
                  />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    {"Date Range:"}
                </TableCell>
                <TableCell align="left">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateRangePicker
                        startText="Check-in"
                        endText="Check-out"
                        value={selectedDates}
                        onChange={(newValue) => {
                          setSelectedDates(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                          </React.Fragment>
                        )}
                      />
                    </LocalizationProvider>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="right" colSpan={2}>
                    <Button variant="outlined" style={{width: "100%"}} onClick={() => onSearchClick(query)}>Search</Button>
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}