import React from 'react';
import {Button} from '@material-ui/core';
import API from '../utils/API';

export default function SaveButton(props){

const postToDb = (recipe)=>{

API.saveRecipes(recipe)
.then(()=>console.log(`You added ${recipe.name} to your recipe card holder`))
.catch(err => console.log(err))

}

return(
    <div>
        <Button 
        size="small"
        color="inherit" 
        onClick={()=>
        {postToDb(props)}}>
            Save
        </Button>
    </div>
)

}