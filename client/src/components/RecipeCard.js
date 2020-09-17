import React from 'react';
import {Grid, Card, CardActionArea, CardMedia, CardContent, CardActions,Button, Typography} from '@material-ui/core';



function RecipeCard(recipe){

    
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
                            This is a Media card. You can use this section to describe content.
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