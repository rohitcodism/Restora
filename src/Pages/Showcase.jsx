import { Autocomplete, Button, Container, TextField, Typography } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { MenuList } from "../Constants/Menu";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Showcase = () => {

    

    const [quantity, setQuantity] = useState(1);

    const location = useLocation();
    let foodId = parseInt(location.pathname.slice(-2))
    if (isNaN(foodId))
        foodId = parseInt(location.pathname.slice(-1))
    else
        foodId = parseInt(location.pathname.slice(-2))

    const food = MenuList.filter((food) => food.id === foodId);
    console.log(food[0]);

    const Quantities =
        [
            { label: "1" },
            { label: "2" },
            { label: "3" },
            { label: "4" },
            { label: "5" },
        ]

        const foodItem =
        {
            name : food[0].name,
            image : food[0].image,
            quantity : quantity,
        }


    return (
        <Container>
            <Navbar />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "6rem",
                    mb: "3rem",
                    height: "500px",
                    borderRadius: "35px",
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Container
                    sx={{

                    }}
                >
                    <img src={food[0].image} alt={food[0].name} style={{ borderRadius: "35px", height: "350px", width: "500px", objectFit: "cover" }} />
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "start",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                            fontSize: "3rem",
                            color: "#01D28E",
                            mb: "1rem",
                            alignSelf: "start",
                        }}
                    >
                        {food[0].name}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "regular",
                            fontSize: "1rem",
                            color: "#000000",
                            mb: "1rem",
                            alignSelf: "start",
                        }}
                    >
                        {food[0].description}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            alignSelf: "start",
                        }}
                    >
                        ₹ {food[0].price}
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            justifyContent: "space-around",
                            alignItems: "center",
                            textAlign: "center",
                            width : "300px",
                        }}
                    >
                        <Container
                            sx={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #000000",
                                width: "120px",
                                height: "40px",
                                padding: 0,
                                margin : 0,
                                borderRadius: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "start",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "regular",
                                    fontSize: "1rem",
                                    color: "#000000",
                                }}
                            >
                                Quantity
                            </Typography>
                        </Container>
                        <Container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width : "120px",
                                height : "40px",
                            }}
                        >
                            <Autocomplete
                                disablePortal
                                options={Quantities}
                                getOptionLabel={(option) => option.label}

                                onChange={(e, value) => { setQuantity(parseInt(value.label)); console.log(value); }}
                                renderInput={(params) => (<TextField {...params} placeholder="1" sx={{
                                    textAlign: "center", paddingTop: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "40px", lineHeight: "40px", '& .MuiOutlinedInput-root .MuiInputBase-input': {
                                        paddingTop: 0, // Remove default top padding
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
                                        width: "120px",
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
                        </Container>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "1rem",
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "#ffffff",
                                border: "2px solid #000000",
                                borderRadius: "25px",
                                width: "230px",
                                height: "45px",
                                textAlign: "center",
                                marginRight: "2rem",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center"
                            }}
                            onClick={() => handleAddToCart(foodItem)}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "regular",
                                    fontSize: "1rem",
                                    color: "#000000",
                                    mb: "1rem",
                                    alignSelf: "start",
                                }}
                            >
                                Add to cart
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "#01D28E",
                                border: "3px solid #01D28E",
                                borderRadius: "25px",
                                width: "230px",
                                height: "45px",
                                textAlign: "center",
                                color: "#ffffff",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    color: "#01D28E",
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "regular",
                                    fontSize: "1rem",
                                }}
                            >
                                Order now
                            </Typography>
                        </Button>
                    </div>
                </Container>
            </Container>
        </Container>
    );
}