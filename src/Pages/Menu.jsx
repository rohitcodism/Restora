import { Container, Typography, TextField } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { MenuList } from "../Constants/Menu";
import { MenuCard } from "../Components/MenuCard";
import { Grid } from "@mui/material";
import { useState } from "react";

export const Menu = () => {

    const[searchTerm, setSearchTerm] = useState("");

    const filteredMenuList = MenuList.filter((food) => {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Container>
            <Navbar />
            <Container sx={{textAlign: "center"}}>
                <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#01D28E", marginTop: "5rem", marginBottom: "5rem" }}> Explore Menu</Typography>
            </Container>
            <Container sx={{width : "100%", display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
            <TextField 
                label="Search for food"
                sx={{
                    width: "70%",
                    fontFamily : "Poppins, sans-serif",
                    color : "#01D28E",
                }}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
        </Container>
            <Grid container spacing={3} sx={{ marginTop: "6rem", marginBottom: "3rem" }}>
                {searchTerm ? filteredMenuList.map((food, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} />
                    </Grid>
                )): MenuList.map((food, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}