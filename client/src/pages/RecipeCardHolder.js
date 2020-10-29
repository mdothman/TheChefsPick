import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { RecipeCard, DeleteButton } from "../components";
import API from "../utils/API";

export default function RecipeCardHolder() {
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    loadRecipes();
  }, []);
  const [open, setOpen] = React.useState(false);

  const loadRecipes = () => {
    API.getRecipes()
      .then((res) => {
        setRecipeData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
        <Grid container spacing={4}>
          {recipeData.map((recipe) =>
            RecipeCard(recipe, DeleteButton, open, setOpen, loadRecipes)
          )}
        </Grid>
      </Container>
    </div>
  );
}
