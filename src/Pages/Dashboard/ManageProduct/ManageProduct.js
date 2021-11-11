import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const Manageproducts = () => {

    const [products, setProducts] = useState([]);
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isChange])

    const handleDeleteProduct = (id) => {
        const isDelete = window.confirm("Are Your Sure Delete This Item");
        if (isDelete) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
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
                            <TableCell>products Name</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {product.price}
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
};

export default Manageproducts;