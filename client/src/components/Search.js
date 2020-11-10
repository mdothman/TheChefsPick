import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import API from "../utils/API";
import LoadingIndicator from './LoadingIndicator'
import { trackPromise } from 'react-promise-tracker';

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
    }
  };
  

  const handleInputChange = (event, newInputValue) => {
    setIsLoading(true)
    let timeout = null;
    setValue(...value, newInputValue);
    if (newInputValue.length === 0) {
      setInactive(true);
    } else if (inactive === false) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        API.getAutocomplete(newInputValue)
          .then(({ data }) => {
            data.length === -1
              ? setIngredients([{ name: newInputValue, id: name }])
              : setIngredients(data);
          })
          .catch((err) => console.log(err));
      }, 200);
    } else {
      setInactive(false);
    }
  };
  return (
    <div>
      <Autocomplete
        autoComplete
        autoHighlight
        onChange={(event, value) => {
          handleSelected(event, value);
        }}
        value={value}
        onInputChange={(event, newValue) => handleInputChange(event, newValue)}
        options={ingredients.map((ingredient) => ingredient.name)}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Ingredient" variant="outlined" />
        )}
      />
    </div>
  );
}
