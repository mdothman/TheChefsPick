import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { RecipeCard, DeleteButton } from "../components";
import API from "../utils/API";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function RecipeCardHolder() {
  const [isLoading, setIsLoading]=useState(true)
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    loadRecipes();
  }, []);
  const [open, setOpen] = React.useState(false);

  const loadRecipes = () => {
    API.getRecipes()
      .then((res) => {
        setRecipeData(res.data);
        setIsLoading(false)
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
          {isLoading?<CircularProgress />:recipeData.map((recipe) =>
            RecipeCard(recipe, DeleteButton, open, setOpen, loadRecipes)
          )}
        </Grid>
      </Container>
    </div>
  );
}
