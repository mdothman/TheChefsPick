import React, {useState} from "react";
import {Container,Grid,Typography,TextField,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import RecipeCard from "./RecipeCard";

const API_KEY = process.env.REACT_APP_API_KEY

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow: 1,
    padding: '0 30px',
  },
  pictureFood: {
    paddingTop: '56.25%'
  },
  ingredients:{
    margin: theme.spacing(1),
      width: '25ch',
  },
  submit:{
    margin: theme.spacing(1),
    color: 'inherit'
  }
}));








export default function Search(){
  const classes = useStyles();
  const [ingredients, setIngredients] = useState({});
  const [recipes, setRecipes] = useState([]);

  const ingredientsInput = event => {
    const {name, value} = event.target
    setIngredients({...ingredients, [name]:value})
    console.log(ingredients)
  }

  const handleIngredientsSubmit = event => {
    event.preventDefault();
    console.log(ingredients)
    let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.ingredient1},+${ingredients.ingredient2},+${ingredients.ingredient3}&number=2&rank=1&apiKey=${API_KEY}`
    axios.get(url)
    .then(response=>{
      console.log(response)
      let data = response.data
      setRecipes(data)
    })
  }
  
    return (
<Container>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
      <form autoComplete="off" className={classes.ingredients}>
      <Typography variant="h6"></Typography>
     <TextField required 
      name="ingredient1" 
      label="Required" 
      placeholder="Ingredient" 
      onChange={ingredientsInput}>
      </TextField>
      <TextField required 
      name="ingredient2" 
      label="Required" 
      placeholder="Ingredient" 
      onChange={ingredientsInput}>
      </TextField>
      <TextField required 
      name="ingredient3" 
      label="Required" 
      placeholder="Ingredient" 
      onChange={ingredientsInput}>
      </TextField>
      <Button 
      type="submit"
      className={classes.submit} 
      onClick={handleIngredientsSubmit} 
      disabled={
      !(ingredients.ingredient1&&
        ingredients.ingredient2&&
        ingredients.ingredient3)}>
          Submit
      </Button>
    </form>
    </Grid>
    </Grid>
  <Grid container spacing={4}>
  {recipes.map((recipe) => (
    RecipeCard(recipe)
      ))}
    </Grid>
</Container>
    )
    }