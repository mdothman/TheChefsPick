import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Search({ onInputChange, ingredients, onChange }) {
  return (
    <div>
      <Autocomplete
        autoComplete="true"
        onChange={onChange}
        onInputChange={onInputChange}
        options={ingredients.map((ingredient) => ingredient.name)}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Ingredient" variant="outlined" />
        )}
      />
    </div>
  );
}
