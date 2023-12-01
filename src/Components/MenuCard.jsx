import { Card, CardContent, CardMedia, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MenuCard = ({ foodTitle, foodDescription, foodImage, foodId, foodPrice }) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link
                to={{
                    pathname: `/showcase/${foodId}`,
                    state: { foodId }
                }}

                style={{
                    textDecoration: "none"
                }}
            >
                <Card sx={{ width: "270px", height: "350px", borderRadius: "15px", background: "#ffffff", bottom: "2rem", cursor: "pointer", color: "#01D28E", transition: "backgroundColor 0.5s ease-in-out, color 0.2s ease-in-out" }}>
                    <CardMedia component="img" height="60%" image={foodImage} alt={foodTitle} />
                    <CardContent sx={{ height: "40%" }}>
                        <Typography variant="h6" sx={{ fontFamily: "Poppins,sans-serif", fontWeight: "semibold" }}>{foodTitle}</Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", color: "black", fontSize: "0.65rem" }}>{foodDescription}</Typography>
                        <Container
                            sx=
                            {{
                                display: "flex",
                                width : "100%",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                marginTop: "1rem",
                                p : 0,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "bold",
                                    color: "#01D28E",
                                    fontSize: "1rem"
                                }}
                            >
                                ₹ {foodPrice}
                            </Typography>
                            <Button
                                variant="contained"
                                sx=
                                {{
                                    backgroundColor: "#01D28E",
                                    border: "3px solid #01D28E",
                                    borderRadius: "40px",
                                    width: "100px",
                                    height: "30px",
                                    borderColor: "#01D28E",
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "0.75rem",
                                    fontWeight: "regular",
                                    ml: "auto",
                                    "&:hover":
                                    {
                                        backgroundColor: "#01D28E",
                                        color: "#01D28E"
                                    },
                                    zIndex: "2",
                                    cursor: "pointer",
                                }}
                            >
                                <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", color: "#ffffff", fontSize: "0.55rem", fontWeight: "medium" }}>Add to cart</Typography>
                            </Button>
                        </Container>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
};