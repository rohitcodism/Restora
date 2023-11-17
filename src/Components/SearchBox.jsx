import { Autocomplete, TextField } from "@mui/material";
import { MenuList } from "../Constants/Menu";
import { Container } from "@mui/material";
import { MenuCard } from "./MenuCard";

const menuOptions = MenuList.map((option) => ({
    label: option.name,
    description: option.description,
    image: option.image,

}));

export const SearchBox = () => {
    return (
        <Container sx={{width : "100%", display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center"}}>
            <TextField 
                label="Search for food"
                sx={{
                    width: "70%",
                    fontFamily : "Poppins, sans-serif",
                    color : "#01D28E",
                }}
            />
        </Container>
    );
}