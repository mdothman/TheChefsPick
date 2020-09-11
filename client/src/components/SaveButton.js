import React, {useState}from 'react';
import {Button} from '@material-ui/core';
import API from '../utils/API';

export default function SaveButton(...props){
const [recipe,setRecipe]= useState({});

const postToDb = (recipe)=>{
setRecipe(props,{
    id:recipe.id,
    name:recipe.name
})

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