import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TextField, Divider } from '@mui/material';
import ListaProductosDialogo from '../productos/ListaProductosDialogo';

const data = {
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95,
                "in-stock": true,
                "sold": true
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99,
                "in-stock": false,
                "sold": true
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99,
                "in-stock": true,
                "sold": false
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99,
                "in-stock": false,
                "sold": false
            }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95,
            "in-stock": true,
            "sold": false
        }
    }
};

export default function StoreTables({ mostrarLibros }) {
    return (
        <div>
            {/* LIBROS */}
            {mostrarLibros ? (
                // Aquí está mi props ("mostrarLibros" que va a ser llamado en MiProyecto.).
                <>
                    <Typography variant="h6" gutterBottom>
                        Libros:
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="tabla-libros">
                            <TableHead>

                                <TableRow>
                                    <TableCell> CATEGORY </TableCell>
                                    <TableCell> AUTHOR </TableCell>
                                    <TableCell> TITLE </TableCell>
                                    <TableCell> ISBN </TableCell>
                                    <TableCell align="right"> PRICE </TableCell>
                                    <TableCell align="right"> IN STOCK </TableCell>
                                    <TableCell align="right"> SOLD </TableCell>
                                </TableRow>

                            </TableHead>

                            <TableBody>
                                {data.store.book.map((libro, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                        <TableCell component="th" scope="row">
                                            {libro.category}
                                        </TableCell>
                                        <TableCell>{libro.author}</TableCell>
                                        <TableCell>{libro.title}</TableCell>
                                        <TableCell>{libro.isbn || 'N/A'}</TableCell>
                                        {/* El "||" o OR establece que si no hay datos, se pondrá un "N/A". */}
                                        <TableCell align="right">{libro.price.toFixed(2)}</TableCell>
                                        {/* El "toFixed(2)" dice cuántos números habrán después del punto decimal (van del 0 al 20 en este 'comando'¿?), en este caso puse 2 porque los precios llegan a 2 decimales. */}
                                        <TableCell align="right">{libro['in-stock'] ? 'Yes' : 'No'}</TableCell>
                                        <TableCell align="right">{libro.sold ? 'Yes' : 'No'}</TableCell>
                                        {/* Siempre es primero el valor positivo, luego el negativo. */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ) : (
                // Props de bicicleta.
                <>

                    {/* BICICLETA */}
                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Bicicleta:
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="tabla-bicicleta">

                            <TableHead>
                                <TableRow>
                                    <TableCell> COLOR </TableCell>
                                    <TableCell align="right"> PRICE </TableCell>
                                    <TableCell align="right"> IN STOCK </TableCell>
                                    <TableCell align="right"> SOLD </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {data.store.bicycle.color}
                                    </TableCell>
                                    <TableCell align="right">{data.store.bicycle.price.toFixed(2)}</TableCell>
                                    <TableCell align="right">{data.store.bicycle['in-stock'] ? 'Yes' : 'No'}</TableCell>
                                    <TableCell align="right">{data.store.bicycle.sold ? 'Yes' : 'No'}</TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>
                </>
            )}

            <TextField label="Compra: " variant="outlined" fullWidth sx={{ mt: 3 }} />

            <Divider color='primary' />

            <ListaProductosDialogo data={data.store} />
        </div>
    );
}