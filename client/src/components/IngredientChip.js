import React from 'react';
import {Chip,Paper} from '@material-ui/core';

export default function IngredientChip(props){
  return(
  <Paper
  component="ul"
>
  {props.recipeSearchObject.map((data) => {
    return (
      <li key={data.key}>
        <Chip
          label={data.label}
          onDelete={props.handleDelete}
        />
      </li>
    );
  })}
</Paper>
  )
}

