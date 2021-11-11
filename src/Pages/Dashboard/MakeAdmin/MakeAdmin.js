import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const MakeAdmin = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        fetch('https://serene-reaches-93418.herokuapp.com/allUsers')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [isChange])

    const handleStatesOrder = (id) => {
        fetch(`https://serene-reaches-93418.herokuapp.com/updateAdmin/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    setIsChange(!isChange)
                }
            })
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell align="right">Admin States</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUsers.map((users) => (
                        <TableRow
                            key={users._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="order">
                                {users.displayName}
                            </TableCell>
                            <TableCell component="th" scope="order">
                                {users.email}
                            </TableCell>
                            <TableCell align="right">{users.admin}</TableCell>
                           
                            <TableCell align="right">
                                <Button onClick={() => handleStatesOrder(users._id)}>Make Admin</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </Paper>
    );
};

export default MakeAdmin;