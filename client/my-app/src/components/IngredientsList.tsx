import React from 'react';
import {Ingredient} from "../types/types";
import {Grid} from "@mui/material";

interface IngredientsListProps {
   readonly ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ingredients}) => {
    return (
        <Grid>
            {ingredients.map(ingredient =>
                <h1>{ingredient.title}</h1>
            )}
        </Grid>
    );
};

export default IngredientsList;