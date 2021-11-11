import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const ManageAllAllOrders = () => {
    const [AllOrders, setAllOrders] = useState([]);
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isChange])

    const handleStatesOrder = (id) => {
        fetch(`http://localhost:5000/updateStates/${id}`, {
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
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">States</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {AllOrders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="order">
                                    {order.displayName}
                                </TableCell>
                                <TableCell component="th" scope="order">
                                    {order.email}
                                </TableCell>
                                <TableCell align="right">{order.name}</TableCell>
                                <TableCell align="right">{order.date}</TableCell>
                                <TableCell align="right">{order.states}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleStatesOrder(order._id)}>Shipped</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
};

export default ManageAllAllOrders;