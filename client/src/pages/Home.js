import React, { useState } from "react";
import { Search, IngredientChip, RecipeCard } from "../components";
import { Grid, Button, Container } from "@material-ui/core";
import API from "../utils/API";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [recipeSearchObject, setRecipeSearchObject] = useState([]);
  const [name, setName] = useState(1);
  const [inactive, setInactive] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [value, setValue] = useState("")

 
  let timeout = null;
  const handleInputChange = (event, newInputValue) => {
    setValue(...value,newInputValue)
    if (newInputValue.length === 0) {
      setInactive(true);
    } else if (inactive === false) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        API.getAutocomplete(newInputValue)
          .then(({ data }) => {
            setIngredients(data);
          })
          .catch((err) => console.log(err));
      }, 100);
    } else {
      setInactive(false);
    }
  };
  const handleSelected = (event, value) => {
    if (value === null) {
      setInactive(true);
    } else if (inactive === false) {
      setSelected([...selected, value]);
      setRecipeSearchObject([
        ...recipeSearchObject,
        { key: name, label: value },
      ]);
      setValue('')
      setName(name + 1);
    } else {
      setInactive(false);
    }
  };
  const handleSubmit = (event,listOfIngredients) => {
    const joined = listOfIngredients.map((str) => str.replace(/\s/g, ""));
    listOfIngredients.length === 0
      ? setInactive(true):
       API.getRecipe(joined)
          .then(({ data }) =>  {
            console.log(data)
            setRecipeData(data)
            setSelected([])
          }
          )
          .catch((err) => console.log(err))
      
  };

  return (
    <div>
      <Container>
      <Grid
        container
        spacing={4}
      >
        <Grid item >
          <Search
            onInputChange={handleInputChange}
            ingredients={ingredients}
            value={value}
            onChange={(event, value) => {
              handleSelected(event, value);
            }}
          />
        </Grid>
        <Grid item >
          <IngredientChip
            recipeSearchObject={recipeSearchObject}
            setRecipeSearchObject={setRecipeSearchObject}
            setSelected={setSelected}
          />
        </Grid>
        <Grid item >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={(event) => handleSubmit(event,selected)}
          >
            Look up recipe
          </Button>
        </Grid>
        
      </Grid>
      <Grid
      container
      >{recipeData.map(recipe=>RecipeCard(recipe))}</Grid>
      </Container>
    </div>
  );
}
