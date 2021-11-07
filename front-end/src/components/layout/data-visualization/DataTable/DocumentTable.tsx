import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DocumentTableProps {
    documentTable: any[]
}

export const DocumentTable: React.FC<DocumentTableProps> = ({documentTable}) => {
    const bodyData = documentTable.map((document: any) => 
            <TableRow> 
                <TableCell>
                    {JSON.stringify(document)}
                </TableCell>
            </TableRow>
    );

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {bodyData}
                </TableBody>
            </Table>
        </TableContainer>
    );
};