import React from 'react';
import {Chip,Paper} from '@material-ui/core';

export default function IngredientChip({recipeSearchObject, setRecipeSearchObject, setSelected}){
  const handleDelete = (chipToDelete) => () => {
    setRecipeSearchObject((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label)
    );
    setSelected((chips) =>
    chips.filter((chip) => chip !== chipToDelete.label)
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

