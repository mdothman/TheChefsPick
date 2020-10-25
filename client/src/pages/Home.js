import React, { useState } from "react";
import { Search, IngredientChip, RecipeCard, SaveButton, InfoCard } from "../components";
import { Grid, Button } from "@material-ui/core";
import API from "../utils/API";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [recipeSearchObject, setRecipeSearchObject] = useState([]);
  const [name, setName] = useState(1);
  const [inactive, setInactive] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);

 
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
           API.getInfo(data.map(recipe => recipe.id))
           .then(res=> {
             setRecipeData(res.data)
             setSelected([])
            })
           .catch(err => console.log(err))
          }
          )
          .catch((err) => console.log(err))
      
  };
  
  return (
    <div >
     
        <InfoCard />
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
            Search
          </Button>
        </Grid>
        
      </Grid>
      <Grid
      container
      spacing= {4}
      >{recipeData.length !== 0? recipeData.map(recipe => RecipeCard(recipe,SaveButton,open,setOpen)):"Cool Beans"}</Grid>
    </div>
  );
}
