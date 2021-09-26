import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export type Table = Array<Array<string | number>>;

export type TableHeader = Array<string>;

interface DataTableProps {
    rowHeaders: TableHeader,
    dataTable: Table
}

/**
 * Develops a data table.
 * 
 * @param rowHeaders the headers for the given table (e.g ['id', 'date', 'data']).
 * @param dataTable the data which should be listed under the header (e.g. [[1, '1/1/21', 'data'], [2, '1/2/21', 'data']]).  
 * 
 * The dataTable should have the same number of columns as rowHeaders; rowHeaders.length == allData[0...n].length  
 * 
 * @returns 
 */
export const DataTable: React.FC<DataTableProps> = ({rowHeaders, dataTable}) => {
    const bodyData = [];
    for(let i = 0; i < dataTable.length; i++) {
        let rowData: Array<any> = [];
        dataTable[i].forEach( (data: string | number, index: number) => {
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