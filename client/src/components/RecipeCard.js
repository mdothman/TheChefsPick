import React from 'react';
import {Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions,Button, Typography} from '@material-ui/core';



function RecipeCard(){


    return(
        <Container>
            <Grid container="true">
                <Grid item="true">
                    <Card>
                        <CardActionArea>
                            <CardMedia 
                            image="https://source.unsplash.com/random"
                            alt="random image"
                            title="Random Image"
                            >
                            
                            </CardMedia>
                            <CardContent>
                            <Typography gutterBottom="true" variant="h5" component="h2">
                            Card Heading
                            </Typography>
                            <Typography>
                            This is a Media card. You can use this section to describe content.
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" color="primary">
                                Click Me!
                                </Button>
                            </CardActions>

                        </CardActionArea>
                    </Card> 
                </Grid>
       
            </Grid>
         
        </Container>
        
    )

}

export default RecipeCard