import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const cardEnlargeStyle = {
    transform: "scale(1.1)", // Scale the card up 10% on hover
    transition: "all 0.2s ease-in-out", // Smooth transition for the enlarge effect
};

export const MenuCard = ({ foodTitle, foodDescription, foodImage }) => {
    return (
            <Card sx={{ width: "250px", height: "300px", borderRadius: "15px", background: "#ffffff", bottom : "2rem" }}>
                <CardMedia component="img" height="60%" image={foodImage} alt={foodTitle} />
                <CardContent sx={{ height: "40%" }}>
                    <Typography variant="h6" sx={{ fontFamily: "Poppins,sans-serif", color: "#01D28E", fontWeight: "semibold" }}>{foodTitle}</Typography>
                    <Typography variant="caption" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "0.7rem" }}>{foodDescription}</Typography>
                </CardContent>
            </Card>
    );
};
