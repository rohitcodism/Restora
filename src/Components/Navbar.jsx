import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <Container sx={{mt : "15px" , display: "flex", justifyContent: "space-evenly", width: "100vw", alignItems : "center"}}>
            <Container>
                <Typography variant="h5" sx={{fontFamily: "Poppins, sans-serif", fontWeight: "Bold", color:"#01D28E"}}><Link to="/" style={{textDecoration : "none", color:"#01D28E"}}>Restora</Link></Typography>
            </Container>
            <Container sx={{ display : "flex", alignItems : "center"}}>
                <Link style={{textDecoration : "none"}}><Typography variant="h6" sx={{fontWeight : "regular", mr : "5rem", color : "#000000", "&:hover":{color:"#01D28E"}}}>Menu</Typography></Link>
                <Link style={{textDecoration: "none"}}><Typography variant="h6" sx={{fontWeight : "regular", mr : "5rem", color : "#000000", "&:hover":{color:"#01D28E"}}}>Order</Typography></Link>
                <Link style={{textDecoration: "none"}}><Typography variant="h6" sx={{fontWeight : "regular", mr : "5rem", color : "#000000", "&:hover":{color:"#01D28E"}}}>Cart</Typography></Link>
            </Container>
            <Container sx={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <Button variant="contained" sx={{border : "3.5px solid #01D28E", borderRadius : "15px", width : "100px", backgroundColor : "#01D28E", textAlign : "center", fontFamily : "Poppins, sans-serif", fontWeight : "medium", boxShadow : "none", "&:hover":{ backgroundColor : "#FFFFFF", border: "3.5px solid #01D28E", color : "#01D28E", boxShadow : "none"}}}>
                    Sign up
                </Button>
            </Container>

        </Container>
    );
}