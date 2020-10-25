import React from 'react';
import{ CardActions,
    Button,
Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import API from '../utils/API'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const DeleteButton = (recipe, open, setOpen,loadRecipes)=>{
    const handleDelete = (event,recipe) =>{
        event.preventDefault()
        console.log(recipe._id)
        API.deleteRecipe(recipe._id)
        .then(res=>{
            setOpen(true)
           
        })
        .catch(err=>console.log(err))
        }
        
          const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            loadRecipes()
            setOpen(false);
          };
    return(
        <div>
            <CardActions>
            <Button size="small" color="primary" type="primary" onClick={event=>handleDelete(event, recipe)}>
              Click Me!
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
         {recipe.title} was deleted!
        </Alert>
      </Snackbar>
          </CardActions>
        </div>
    )
  }

  export default DeleteButton