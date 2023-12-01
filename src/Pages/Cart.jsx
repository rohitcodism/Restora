import { Button, Container, Typography } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Cart = () => {

    const cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log(cartList);

    return (
        <Container>
            <Navbar />
            <Typography variant="h5"
                sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    color: '#01D28E',
                    fontWeight: 'bold',
                    mt: 5,
                    mb: 3,
                    letterSpacing: '0.05em',
                    gap: "2rem",
                    left: "1rem",
                    width: "auto",
                }}
            >
                Cart    /checkout
            </Typography>
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        width: "50%",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "black",
                            fontWeight: "bold",

                        }}
                    >
                        Cart
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            fontFamily : "Poppins, sans-serif",
                        }}
                    >
                        <TableContainer 
                            component={Paper}
                        >
                            <Table 
                                sx={{
                                    width : "500px",
                                }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Product</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartList.map((item) =>(
                                        <TableRow
                                            key={item.id}
                                            sx={{
                                                ".MuiTableRow-root": {
                                                    borderBottom : "none",
                                                },
                                            }}>
                                                <TableCell align="left" style={{ textAlign : "center", display : "flex", alignItems : "center", gap : 5, width : "200px", borderBottom : "1px"}}><img src={item.image} alt={item.name} style={{height : "25px", width : "25px", borderRadius : "5px", objectFit : "cover"}}/>{item.name}</TableCell>
                                                <TableCell align="center" sx={{borderBottom : "1px"}}>{item.quantity}</TableCell>
                                                <TableCell align="center" sx={{width : "100px", borderBottom : "1px"}}>₹ {item.price}</TableCell>
                                                <TableCell align="center" sx={{borderBottom : "1px"}}><Button variant="text" sx={{borderRadius : "10px", padding : 0,color : "black"}}>×</Button></TableCell>
                                            </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Container>
            <br />
            <button onClick={() => { localStorage.removeItem('cart'); window.location.reload(); }}>Clear cart</button>
        </Container >
    );
}