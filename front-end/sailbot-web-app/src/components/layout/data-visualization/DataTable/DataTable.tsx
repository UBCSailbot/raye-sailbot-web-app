import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DataTableProps {
    rowHeaders: Array<string>,
    allData: Array<Array<string | number>>
}

export const DataTable: React.FC<DataTableProps> = ({rowHeaders, allData}) => {
    const bodyData = [];
    for(let i = 0; i < allData.length; i++) {
        let rowData: Array<any> = [];
        allData[i].forEach( (data: string | number, index: number) => {
            rowData.push(
                <TableCell key={index}>
                    {data}
                </TableCell>
            );
        })
        bodyData.push(
            <TableRow> 
                {rowData}
            </TableRow>
        ); 
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {rowHeaders.map( header => <TableCell key={header}> {header} </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodyData}
                </TableBody>
            </Table>
        </TableContainer>
    );
};