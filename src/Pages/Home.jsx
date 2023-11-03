import { Box } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { Hero } from "../Components/Hero";

export const Home = () => {
    return(
        <Box  sx={{display : "flex", flexDirection : "column", alignContent : "space-evenly", height : "100vh", width : "100vw"}}>
            <Navbar />
            <Hero />
        </Box>
    );
}