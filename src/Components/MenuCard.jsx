import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const MenuCard = ({ foodTitle, foodDescription, foodImage }) => {
    return (
            <Card sx={{ width: "250px", height: "300px", borderRadius: "15px", background: "#ffffff", bottom : "2rem", cursor : "pointer", color: "#01D28E", transition : "backgroundColor 0.5s ease-in-out, color 0.2s ease-in-out", "&:hover" : {backgroundColor : "#01D28E", color : "#ffffff"}}}>
                <CardMedia component="img" height="60%" image={foodImage} alt={foodTitle} />
                <CardContent sx={{ height: "40%", "&:hover" : {color : "#ffffff"} }}>
                    <Typography variant="h6" sx={{ fontFamily: "Poppins,sans-serif", fontWeight: "semibold"}}>{foodTitle}</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", color : "black",  fontSize: "0.65rem" }}>{foodDescription}</Typography>
                </CardContent>
            </Card>
    );
};
