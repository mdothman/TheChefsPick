import React, { useState } from "react";
import {
  Search,
  IngredientChip,
  RecipeCard,
  SaveButton,
  InfoCard,
} from "../components";
import { Grid, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import API from "../utils/API";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [recipeSearchObject, setRecipeSearchObject] = useState([]);
  const [name, setName] = useState(1);
  const [inactive, setInactive] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (event, listOfIngredients) => {
    const joined = listOfIngredients.map((str) => str.replace(/\s/g, ""));
    listOfIngredients.length === 0
      ? setInactive(true)
      : API.getRecipe(joined)
          .then(({ data }) => {
            API.getInfo(data.map((recipe) => recipe.id))
              .then((res) => {
                setRecipeData(res.data);
                setSelected([]);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
  };

  return (
    <div>
      <InfoCard />
      <Grid container spacing={4}>
        <Grid item>
          <Search
            ingredients={ingredients}
            setIngredients={setIngredients}
            value={value}
            setValue={setValue}
            name={name}
            setName={setName}
            open={open}
            setOpen={setOpen}
            inactive={inactive}
            setInactive={setInactive}
          />
        </Grid>
        <Grid item>
          <IngredientChip
            recipeSearchObject={recipeSearchObject}
            setRecipeSearchObject={setRecipeSearchObject}
            setSelected={setSelected}
          />
        </Grid>
        <Grid item>
          <Button
            disableElevation={true}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
            onClick={(event) => handleSubmit(event, selected)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {recipeData.length !== 0 ? (
          recipeData.map((recipe) =>
            RecipeCard(recipe, SaveButton, open, setOpen)
          )
        ) : (
          <Grid item xs={12} sm={6} md={4}></Grid>
        )}
      </Grid>
    </div>
  );
}
