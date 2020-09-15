import React from 'react';
import {Button} from '@material-ui/core';
// import API from '../utils/API';
import axios from "axios";

export default function SaveButton(props){

const postToDb = (recipe)=>{
console.log(recipe)
// API.saveRecipes(recipe)
axios.post("/api/recipes", recipe)
.then(()=>console.log(`You added ${recipe.name} to your recipe card holder`))
.catch(err => console.log(err))

}

return(
    <div>
        <Button 
        type="primary"
        size="small"
        color="inherit" 
        onClick={()=>
        {postToDb(props)}}>
            Save
        </Button>
    </div>
)

}