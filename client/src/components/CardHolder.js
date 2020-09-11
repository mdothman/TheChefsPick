import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import {Grid,Typography, Container, Paper, Card, CardActionArea, } from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'

export default function CardHolder(){
const [recipes,setRecipes] = useState([]);

useEffect(()=>{
    loadRecipes()
}, [])

function loadRecipes(){
    API.getRecipes()
    .then(res=>
        setRecipes(res.data))
    .catch(err => console.log(err))
}
    return(
        <div>
            <Container>

    {recipes.length?(
<Grid container="true" spacing={3}>
        {recipes.map((recipe) =>{
            <Grid item="true" key={recipe.id}  xs={12}>
                <Paper>
                    <Typography variant="h5">{recipe.name}.</Typography>
                </Paper>
            </Grid>
        })}
    </Grid>
    ):(
<Typography variant="h1">There are no results to display</Typography>
    )}
    
</Container>
        </div>


    )


}