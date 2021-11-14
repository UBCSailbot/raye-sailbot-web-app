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

export type Criteria = "columns" | "sensors" | "dates";

interface SelectionTableProps {
    lists: {
        [ListName: string]: string[]
    }
    onSearchClick: () => Promise<any> | any;
    setCriteria: (critera: Criteria, newValue: any) => Promise<any> | any;
}

export const SelectionTable: React.FC<SelectionTableProps> = ({lists, onSearchClick, setCriteria}) => {
    const [dateValue, setValue] = React.useState<DateRange<Date>>([null, null]);

    return (
      <TableContainer component={Paper} style={{height: "100%"}}>
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography>
                  {"Filter the data"}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(lists).map((key: any) => (
              <TableRow>
                  <TableCell colSpan={2}>
                    <Autocomplete
                      multiple
                      size="small"
                      id="multiple-limit-tags"
                      options={lists[key]}
                      getOptionLabel={(option) => option}
                      defaultValue={[]}
                      onChange={(e, val) => setCriteria(key, val)}
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" label={key} placeholder=""/>
                      )}
                    />
                  </TableCell>
              </TableRow>
            ))}
            <TableRow>
                <TableCell>
                    {"Date Range:"}
                </TableCell>
                <TableCell align="left">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateRangePicker
                        startText="Check-in"
                        endText="Check-out"
                        value={dateValue}
                        onChange={(newValue) => {
                          setValue(newValue);
                          setCriteria("dates", newValue)
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
                    <Button variant="outlined" style={{width: "100%"}} onClick={() => onSearchClick()}>Search</Button>
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}