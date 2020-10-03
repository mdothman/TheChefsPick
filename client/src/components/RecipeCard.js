import React, { useEffect, useState } from 'react';
import {Grid, Card, CardActionArea, CardMedia, CardContent, CardActions,Button, Typography} from '@material-ui/core';
import axios from 'axios';


const spoonacular_API_KEY = process.env.REACT_APP_API_KEY

function RecipeCard(recipe){
    
    const [recipeId, setRecipeId] = useState([]);
    useEffect(()=>
    setRecipeId(recipe.id)
    )
    
    function getRecipeInformation(){
        axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeId}&apiKey=${spoonacular_API_KEY}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    
    
    console.log(recipe)

    return(

                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                    <Card
                    height = '100%'
                    display = 'flex'
                    flexDirection = 'column'
                    >
            
                        <CardActionArea>
                            <CardMedia
                            image = {recipe.image}
                            title = {recipe.title}
                            style = {{paddingTop:'56.25%'}}
                            />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                            {recipe.title}
                            </Typography>
                            <Typography>
                            ({recipeId?
                            getRecipeInformation
                            :["No Information available"]
                            })
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                            size="large" 
                            color="primary"
                            type="primary"
                            >
                                Click Me!
                            </Button>
                        </CardActions>

                    </CardActionArea>
                </Card> 
            </Grid> 
    )

}

export default RecipeCard