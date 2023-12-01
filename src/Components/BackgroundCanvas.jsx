import { icons } from "lucide-react";
import { random } from "lodash";
import React, { useState } from "react";

const getRandomFoodIcon = () => {
    const foodIcons = [icons.Pizza, icons.Salad, icons.Sandwich, icons.Soup, icons.Donut];
    const randomIndex = random(0, foodIcons.length - 1);
    return foodIcons[randomIndex];
}

export const BackgroundCanvas = () => {

    const [foodIcons, setFoodIcons] = useState([]);

    const renderRandomFoodIcon = () => {
        const lucideFoodIconsElements = foodIcons.map((foodIcon, index) => {
            const style = {
                position : "absolute",
                left: random(0, 100) + '%',
                top: random(0, 100) + '%',
                fontSize: random(10, 50) + 'px',
            }
            <getRandomFoodIcon />
        })
    }

    return(
        <div>

        </div>
    );
}