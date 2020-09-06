import React, {useState, useEffect} from "react";
import {Container,List,ListItem,ListItemText,Grid,Card,CardMedia,CardContent,CardActions,Typography,TextField,Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const useStyles = makeStyles((theme)=>({
  infoCard: {

    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  
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
  }
}));








export default function Results(){
  const classes = useStyles();
  const [ingredients, setIngredients] = useState({})
  const [recipes, setRecipes] = useState([]);
  const[summary, setSummary] = useState([])

  const ingredientsInput = event => {
    const {name, value} = event.target
    setIngredients({...ingredients, [name]:value})
    console.log(ingredients)
  }

  const handleIngredientsSubmit = event => {
    event.preventDefault();
    console.log(ingredients.ingredient1)
    let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.ingredient1},+${ingredients.ingredient2},+${ingredients.ingredient3}&number=1&apiKey=${API_KEY}`
    axios.get(url)
    .then(response=>{
      console.log(response)
      let data = response.data
      setRecipes(data)
      
    })
  }
  const handleViewButton = id =>{
    let url = `https://api.spoonacular.com/recipes/${id}/summary?apiKey=${API_KEY}`
    axios.get(url)
    .then(response=>{
        console.log(response)
        let data = response.data.summary
        setSummary(data)
    })
}

    return (
    <Container className={classes.root} maxWidth="md">
      <Card container className={classes.infoCard} xs={12}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" >You're the Chef, so take your pick!</Typography>
      </Card>
  
    <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
      <form autoComplete="off" className={classes.ingredients}>
        <Typography variant="h6"></Typography>
      <TextField name="ingredient1" onChange={ingredientsInput}></TextField>
      <Button className={classes.submit} onClick={handleIngredientsSubmit}>Submit</Button>
    </form>
    </Grid>
    
    
      {recipes.map((recipe) => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <Card >
            <CardMedia
            className={classes.pictureFood}
              image={recipe.image}
              title={recipe.title}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.title}
              </Typography>
              <Typography>
                There are {recipe.missedIngredientCount} missing ingredients.
              </Typography>
              <div>
              {recipe.missedIngredients.map((missing)=>
                <List>
                  <ListItem item key={missing.id}>
                    <ListItemText>
                      {missing.name}
                    </ListItemText>
                  </ListItem>
                </List> )}
              </div>
            </CardContent>
            <CardActions>
           <Button  onClick={()=>handleViewButton(recipe.id)}>
             <Typography variant="button">Summary</Typography>
             </Button>
              <Typography variant="subtitle2">{summary}</Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>

    )}
