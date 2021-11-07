import * as React from 'react';
import Table from '@mui/material/Table';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import { CheckboxList } from '../CheckBoxList/CheckBoxList';
import { BasicDateRangePicker } from '../DateRangePicker/DateRangePicker';


function Row(props: { list: string[], listName: string }) {
    const { list, listName } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
              {listName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <CheckboxList list={list}/>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

interface SelectionTableProps {
    lists: {
        [ListName: string]: string[]
    }
    onSearchClick: () => Promise<any> | any;
}

export const SelectionTable: React.FC<SelectionTableProps> = ({lists, onSearchClick}) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
                <TableCell>
                    {"The selection inputs will show here"}
                </TableCell>
                <TableCell align="right">
                    <Button variant="outlined" onClick={() => onSearchClick()}>Search</Button>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(lists).map((key) => (
              <Row key={key} list={lists[key]} listName={key}/>
            ))}
            <TableRow>
                <TableCell>
                    {"Date Range:"}
                </TableCell>
                <TableCell align="left">
                    <BasicDateRangePicker />
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}