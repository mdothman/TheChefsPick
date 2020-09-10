import React, {useState} from "react";
import {Container,Grid,Typography,TextField,Button,Card,CardMedia,CardActionArea,CardContent,CardActions,List} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import API from '../utils/API';

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
  const handleClick = (recipe) => {
    navigator.clipboard.writeText(recipe)
    console.log(recipe)
  }

  const saveRecipe = (id,name) => {
 
  API.saveRecipes(id,name)

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
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <Card>
            
            <CardActionArea onClick={()=>handleClick(recipe.title)}>
            <CardMedia
            className={classes.pictureFood}
              image={recipe.image}
              title={recipe.title}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.title}
              </Typography>
              <Typography variant="subtitle1">
                There are {recipe.missedIngredientCount} missing ingredients.
              </Typography>
              
              <List>
              {recipe.missedIngredients.map((missing)=>
                  <ul item key={missing.id}>
                    <li>
                      {missing.name}
                    </li>
                  </ul>
                )}
             </List> 
             
            </CardContent>

            </CardActionArea>
           <CardActions>
             <Button size="small" 
             color="inherit"
              onClick={()=>saveRecipe( {id:recipe.id, name:recipe.name})}
              >
               Save
             </Button>
           </CardActions>
            
          </Card>
        </Grid>
      ))}
    </Grid>
</Container>
    )
    }
