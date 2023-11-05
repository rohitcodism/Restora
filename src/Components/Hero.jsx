import { Button, Container, Typography } from "@mui/material";
import { Pizza, Salad, Sandwich, CupSoda, Soup } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {Cursor, Typewriter, useTypewriter} from "react-simple-typewriter"

export const PizzaRotate = ({hovered}) => {
    return(
        <motion.div  style={{display : "flex", justifyContent : "center", alignItems : "center"}} animate={{rotate : hovered ? -55 : 0}}>
            <Pizza size={30} />
        </motion.div>
    );
}
export const Background = () => {

    function generateRandomPosition(containerWidth, containerHeight) {
        return {
            x: Math.random() * Math.random()  * 1000,
            y: Math.random() * Math.random()  * 500
        };
    }

    const containerWidth = 1000;
    const containerHeight = 600;

    const iconPositions = [
        { ...generateRandomPosition(containerWidth, containerHeight) },
        { ...generateRandomPosition(containerWidth, containerHeight) },
        { ...generateRandomPosition(containerWidth, containerHeight) },
        { ...generateRandomPosition(containerWidth, containerHeight) },
        { ...generateRandomPosition(containerWidth, containerHeight) },
        
    ];

    return(
        <div style={{zIndex : "-1", position : "fixed"}}>
            {iconPositions.map((position, index) => (
                <motion.div key={index} style={{position : "absolute", left : position.x, top : position.y}}>
                    <Pizza size={140} color="#01D28E" style={{opacity : 0.35}} />
                </motion.div>
            ))}
        </div>
    );
}

export const Hero = () => {

    const [text] = useTypewriter({
        words: ["flavors . ."],
        loop : 0,
        typeSpeed : 180,
        deleteSpeed : 160,
    })

    const[hovered, setHovered] = useState(false);

    return(
        <Container sx={{display : "flex", flexDirection : "column", alignItems : "center", alignContent : "center", mt : "10rem", height : "100%"}}>
            <div style={{position : "fixed", zIndex : "-1", display : "none"}}>
                <Background />
            </div>
            <Typography variant="h3" sx={{fontFamily: "Poppins, sans-serif", fontWeight : "bold", textAlign : "center"}}>Explore the world of<span id="typewriter" style={{color : "#01D28E", fontFamily : "Caveat, cursive", fontWeight : "SemiBold", fontSize : "4rem", paddingLeft : "1rem"}}>{text}<Cursor cursorColor="#01D28E"/></span></Typography>
            <Button onMouseEnter={() =>(setHovered(true))} onMouseLeave={() => (setHovered(false))} variant="contained" sx={{backgroundColor : "#01D28E", border : "3px solid #01D28E", borderRadius : "40px", width : "250px",height : "70px", borderColor : "#01D28E", fontFamily : "Poppins, sans-serif", fontSize : "1rem", fontWeight : "Bold", mt : "7rem", "&:hover":{ backgroundColor : "#FFFFFF", color:"#01D28E"}}} endIcon={<PizzaRotate hovered={hovered} />} disableElevation><Typography variant="h5" sx={{fontWeight : "bold", fontFamily : "Poppins, sans-serif", pr : "1rem"}}>Lets eat</Typography></Button>
        </Container>
    );
}