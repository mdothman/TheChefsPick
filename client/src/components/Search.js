import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import API from "../utils/API";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Search({
  ingredients,
  setIngredients,
  value,
  setValue,
  setInactive,
  inactive,
  selected,
  setSelected,
  recipeSearchObject,
  setRecipeSearchObject,
  name,
  setName,
  isLoading,
  setIsLoading
}) {
  const handleSelected = (event, value) => {
    console.log("handleSelected value = "+value)
    event.preventDefault();
    if (value === null) {
      setInactive(true);
    } else if (inactive === false) {
      setSelected([...selected, value]);
      setRecipeSearchObject([
        ...recipeSearchObject,
        { key: name, label: value },
      ]);
      setValue("");
      setName(name + 1);
    } else {
      setInactive(false);
      console.log("Handle selected recipe search object array = "+recipeSearchObject)
    }
  };
  const handleOptions = (option, value) =>{
    console.log("Handle options option = " +option+" &  value = "+ value)
  }
  const handleClose = (reason) =>{
    console.log("The handle close has this reason = "+reason)
  }
  const handleInputChange =  (newInputValue) => {
    setValue(newInputValue)
    console.log("Your set value = " + value)
   console.log("Your new input value = " + newInputValue);
   return newInputValue
  };
  return (
    <div>
      <Autocomplete
        onClose = {(event,reason)=>handleClose(reason)}
        onChange={(event, value) => {
          handleSelected(event, value);
        }}
        value={value}
        getOptionSelected = {(option,value)=>{handleOptions(option,value)}}
        onInputChange={(event, newValue)=>{handleInputChange(newValue)}}
        options={ingredients.map((ingredient) => ingredient.name)}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Ingredient" variant="outlined" />
        )}
      />
    </div>
  );
}
