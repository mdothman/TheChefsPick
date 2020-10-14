import React from 'react';
import {Chip,Paper} from '@material-ui/core';

export default function IngredientChip({recipeSearchObject, setRecipeSearchObject}){
  const handleDelete = (chipToDelete) => () => {
    setRecipeSearchObject((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return(
  <Paper
  component="ul"
>
  {recipeSearchObject.map((data) => {
    return (
      <li key={data.key}>
        <Chip
          label={data.label}
          onDelete={handleDelete(data)}
        />
      </li>
    );
  })}
</Paper>
  )
}

