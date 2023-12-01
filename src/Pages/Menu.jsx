import { Container, Typography, TextField, Button } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { MenuList } from "../Constants/Menu";
import { MenuCard } from "../Components/MenuCard";
import { Grid } from "@mui/material";
import { useState } from "react";

export const Menu = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");

    const filteredMenuList = MenuList.filter((food) => {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const categoryFilteredMenuList = MenuList.filter((food) => {
        if (category === "All")
            return food;
        else if (category === "Veg")
            return food.category === category;
        else if (category === "Non-veg")
            return food.category === category;
    });

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Navbar />
            <Container sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#000000", marginTop: "5rem", marginBottom: "3rem" }}> Explore Menu</Typography>
            </Container>
            <Container sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TextField
                    label="Search for food"
                    sx={{
                        width: "60%",
                        outlineColor: "#01D28E",
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "3px",
                            borderColor: "#01D28E",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#01D28E",
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                        },
                    }}
                    
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
            </Container>
            <Container sx={{ display: "flex", flexDirection: "row", marginTop: "1.5rem", justifyContent: "space-evenly", alignItems: "center" }}>
                <Button variant="text" sx={{ border: "1px solid #ffffff", fontFamily: "Poppins, sans-serif", fontSize: "1rem", color: "#01D28E", borderRadius: "15px", cursor: "pointer", "&:hover": { border: "1px solid #01D28E" }, "&:active": { border: "1px solid #01D28E", backgroundColor: "rgba(1, 210, 142, 0.7)" } }} onClick={() => { setCategory("All") }}>All</Button>
                <Button variant="text" sx={{ border: "1px solid #ffffff", fontFamily: "Poppins, sans-serif", fontSize: "1rem", color: "#01D28E", borderRadius: "15px", cursor: "pointer", "&:hover": { border: "1px solid #01D28E" } }} onClick={() => { setCategory("Veg") }}>Veg</Button>
                <Button variant="text" sx={{ border: "1px solid #ffffff", fontFamily: "Poppins, sans-serif", fontSize: "1rem", color: "#01D28E", borderRadius: "15px", cursor: "pointer", "&:hover": { border: "1px solid #01D28E" } }} onClick={() => { setCategory("Non-veg") }}>Non-veg</Button>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Grid container spacing={2.5} sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
                    {searchTerm ? filteredMenuList.map((food, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} foodId={food.id} foodPrice={food.price} />
                        </Grid>
                    )) : category ? categoryFilteredMenuList.map((food, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} foodId={food.id} foodPrice={food.price}/>
                        </Grid>

                    )) : MenuList.map((food, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} foodId={food.id} foodPrice={food.price} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}