import React, {useState, useEffect} from "react";
import {Container,Grid,Card,CardMedia,CardContent,CardActions,Typography,TextField,Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme)=>({
  pictureFood: {
    paddingTop: '56.25%'
  },
  ingredients:{
    margin: theme.spacing(1),
      width: '25ch',
  }
}));








export default function Results(){
  const classes = useStyles();
  const [ingredients, setIngredients] = useState({})

console.log(ingredients)
  const ingredientsInput = event => {
    const {name, value} = event.target
    setIngredients({...ingredients, [name]:value})
    console.log(ingredients)
  }

  // const ingredientList = ingredients.map(ingredient=>
  //     ingredient + "%2C")

  const handleIngredientsSubmit = event => {
    event.preventDefault();
    console.log(ingredients)
   
  }

    return (

  <Container maxWidth="md">
    <form autoComplete="off" className={classes.ingredients}>
      <TextField name="ingredient1" onChange={ingredientsInput} ></TextField>
      <TextField name="ingredient2" onChange={ingredientsInput}></TextField>
      <TextField name="ingredient3" onChange={ingredientsInput} ></TextField>
      <Button onClick={handleIngredientsSubmit}>Submit</Button>
    </form>
    {/* <Grid container spacing={4}>
      {results.map((result) => (
        <Grid item key={result.id} xs={12} sm={6} md={4}>
          <Card >
            <CardMedia
            className={classes.pictureFood}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid> */}
  </Container>

    )}
