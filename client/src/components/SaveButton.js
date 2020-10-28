import React from "react";
import { CardActions, Button, Snackbar } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import MuiAlert from "@material-ui/lab/Alert";
import API from "../utils/API";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SaveButton = ({ recipe, open, setOpen }) => {
  const [...ingredient] = recipe.extendedIngredients.map(
    (ingredients) => ingredients.original
  );
  const handleSave = (event, recipe) => {
    console.log(recipe);
    API.saveRecipes({
      _id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      ingredients: ingredient,
    })
      .then((res) => {
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div key={recipe.id}>
      <CardActions>
        <Button
          size="small"
          color="primary"
          startIcon={<SaveIcon />}
          variant="contained"
          type="primary"
          onClick={(event) => handleSave(event, recipe)}
        >
          Save
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {recipe.title} was saved!
          </Alert>
        </Snackbar>
      </CardActions>
    </div>
  );
};

export default SaveButton;
