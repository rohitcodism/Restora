import { Container } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { MenuList } from "../Constants/Menu";
import { MenuCard } from "../Components/MenuCard";
import { Grid } from "@mui/material";

export const Menu = () => {
    return(
        <Container>
            <Navbar />
            <Grid container spacing={3} sx={{marginTop : "12rem", marginBottom : "3rem"}}>
                {MenuList.map((food) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={food.id}>
                        <MenuCard foodTitle={food.name} foodDescription={food.description} foodImage={food.image} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}