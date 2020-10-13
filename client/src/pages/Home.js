import React, { useState, useEffect } from "react";
import { Search } from "../components";
import { Grid, Button, Paper, Chip, Avatar } from "@material-ui/core";
import API from "../utils/API";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [recipeSearchObject, setRecipeSearchObject] = useState([]);
  const [name, setName] = useState(1);
  const [inactive, setInactive] = useState(false);
  const [recipeData, setRecipeData] = useState([])

  const handleDelete = (chipToDelete) => () => {
    setRecipeSearchObject((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  let timeout = null;
  const handleInputChange = (event, newInputValue) => {
    if (!newInputValue.length) {
      setInactive(true);
    } else if (inactive === false) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(newInputValue);
        API.getAutocomplete(newInputValue)
          .then(({ data }) => {
            setIngredients(data);
          })
          .catch((err) => console.log(err));
      }, 1000);
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
      setName(name + 1);
    } else {
      setInactive(false);
    }
  };
  const handleSubmit=(listOfIngredients)=>{
    listOfIngredients.length ===0 ? setInactive(true):
    inactive === false?
    
     API.getRecipes(listOfIngredients)
     .then(({data})=>setRecipeData(data))
     .catch(err => console.log(err)):
     setInactive(false)
     setSelected([])
  }
 

  return (
    <div>
      <Grid container="true">
        <Grid item="true">
          <Search
            onInputChange={handleInputChange}
            ingredients={ingredients}
            onChange={(event, value) => {
              handleSelected(event, value);
            }}
          />
        </Grid>
        <Paper
          component="ul"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            margin: 0,
          }}
        >
          {recipeSearchObject.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  style={{ margin: "2px" }}
                />
              </li>
            );
          })}
        </Paper>
        <Button variant="contained" color="secondary" size="large" onClick={()=>handleSubmit(selected)} >
          Look up recipe
        </Button>
      </Grid>
    </div>
  );
}
