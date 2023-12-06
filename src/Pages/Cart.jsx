import { Button, Container, Typography } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";





export const Cart = () => {

    const [cartList, setCartList] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    console.log(cartList);

    const Quantities =
        [
            { label: "1" },
            { label: "2" },
            { label: "3" },
            { label: "4" },
            { label: "5" },
        ]

    const totalPrice = cartList.reduce((acc, item) => {
        return acc + item.defaultPrice * item.quantity;
    }, 0);
    console.log(totalPrice);

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
                            fontFamily: "Poppins, sans-serif",
                            alignSelf: "flex-start",
                        }}
                    >
                        Cart
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        <TableContainer
                            component={Paper} 
                            sx={{
                                borderRadius: "20px",
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            <Table
                                sx={{
                                    width: "500px",
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
                                    {cartList.map((item) => (
                                        <TableRow
                                            key={item.id}
                                            sx={{
                                                ".MuiTableRow-root": {
                                                    borderBottom: "none",
                                                },
                                            }}>
                                            <TableCell key={item.id} align="left" style={{ textAlign: "center", display: "flex", alignItems: "center", gap: 8, width: "200px", borderBottom: "1px" }}>{item.image && (
                                                <img src={item.image} alt={item.name} style={{ height: "25px", width: "25px", borderRadius: "5px", objectFit: "cover" }} />
                                            )}{item.name}</TableCell>
                                            <TableCell align="center" sx={{ borderBottom: "1px" }}>
                                                <Autocomplete
                                                    key={item.id}
                                                    disablePortal
                                                    options={Quantities}
                                                    getOptionLabel={(option) => option.label}
                                                    defaultValue={{ label: item.quantity }}
                                                    onChange={(e, value) => {
                                                        const updatedQuantity = parseInt(value.label);
                                                        const updatedPrice = updatedQuantity * item.defaultPrice;
                                                        { console.log(updatedPrice) }
                                                        { console.log(updatedQuantity) }
                                                        const updatedCartList = cartList.map((cartItem) => {
                                                            if (cartItem.id === item.id) {
                                                                console.log(`CarItemId : ${cartItem.id} ItemId : ${item.id}`)
                                                                return { ...cartItem, quantity: updatedQuantity, price: updatedPrice };
                                                            } else {
                                                                return cartItem;
                                                            }
                                                        });
                                                        setCartList(updatedCartList);
                                                        localStorage.setItem('cart', JSON.stringify(updatedCartList));
                                                        console.log(updatedCartList);
                                                    }}
                                                    renderInput={(params) => (<TextField {...params} placeholder="1" sx={{
                                                        textAlign: "center", paddingTop: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "40px", lineHeight: "40px", '& .MuiOutlinedInput-root .MuiInputBase-input': {
                                                            padding: 0, // Remove default top padding
                                                        }, "& .MuiAutocomplete-clearIndicator": {
                                                            display: "none !important",
                                                        },
                                                    }} />)}
                                                    sx={{
                                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                            borderWidth: "3px",
                                                            borderColor: "#01D28E",
                                                            textAlign: "center",
                                                        },
                                                        "& .MuiInputLabel-root.Mui-focused": {
                                                            color: "#01D28E",
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            textAlign: "center",
                                                            width: "50px",
                                                            height: "40px",
                                                            borderRadius: "20px",
                                                        },
                                                        "& .MuiAutocomplete-input": {
                                                            textAlign: "center", // Explicitly set textAlign to center
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        },
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell key={item.id} align="center" sx={{ width: "100px", borderBottom: "1px" }}>₹ {item.defaultPrice * item.quantity}</TableCell>
                                            <TableCell key={item.id} align="center" sx={{ borderBottom: "1px" }}><Button variant="text" sx={{ borderRadius: "10px", padding: 0, color: "black" }}>×</Button></TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontFamily: "Poppins, sans-serif",
                                                fontWeight: "bold",
                                                borderBottom: "none",
                                                color: "#01D28E"
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontFamily: "Poppins, sans-serif",
                                                    fontWeight: "bold",
                                                    borderBottom: "none",
                                                }}
                                            >
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="subtitle1"
                                                align="center"
                                                sx={{
                                                    fontFamily: "Poppins, sans-serif",
                                                    fontWeight: "bold",
                                                    borderBottom: "none",
                                                    color: "#01D28E"
                                                }}
                                            >
                                                ₹ {totalPrice}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
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