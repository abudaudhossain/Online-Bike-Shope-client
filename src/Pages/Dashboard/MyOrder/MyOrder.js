import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isChange, setIsChange] = useState(true)
    const { email } = user;
    useEffect(() => {
        fetch('http://localhost:5000/myOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isChange])
    console.log(orders);
    const handleDeleteOrder = (id) => {
        const isDelete = window.confirm("Are Your Sure Delete This Item");
        if (isDelete) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsChange(!isChange)
                    }
                })
        }
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
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.displayName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.email}
                                </TableCell>
                                <TableCell align="right">{order.name}</TableCell>
                                <TableCell align="right">{order.date}</TableCell>
                                <TableCell align="right">{order.states}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrder(order._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
};

export default MyOrder;