import React from "react";
import { CardActions, Button, Snackbar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiAlert from "@material-ui/lab/Alert";
import API from "../utils/API";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DeleteButton = ({ recipe, open, setOpen, loadRecipes }) => {
  const handleDelete = (event, recipe) => {
    console.log(recipe._id);
    API.deleteRecipe(recipe._id)
      .then((res) => {
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    loadRecipes();
    setOpen(false);
  };
  return (
    <div key={recipe.id}>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          startIcon={<DeleteIcon />}
          color="secondary"
          type="primary"
          onClick={(event) => handleDelete(event, recipe)}
        >
          Delete
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {recipe.title} was deleted!
          </Alert>
        </Snackbar>
      </CardActions>
    </div>
  );
};

export default DeleteButton;
