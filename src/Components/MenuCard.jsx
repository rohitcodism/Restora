import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const MenuCard = ({foodTitle, foodDescription, foodImage}) => {
    return(
        <Card sx={{width : "250px", height : "300px", borderRadius : "15px", background: "#e0e0e0" , boxShadow:  "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"}}>
            <CardMedia component="img" height="60%" image={foodImage} alt={foodTitle} />
            <CardContent sx={{height : "40%"}}>
                <Typography variant="h6" sx={{fontFamily : "Poppins,sans-serif", color  :"#01D28E", fontWeight : "semibold"}}>{foodTitle}</Typography>
                <Typography variant="body2" sx={{fontFamily : "Poppins, sans-serif"}}>{foodDescription}</Typography>
            </CardContent>
        </Card>
    );
};
