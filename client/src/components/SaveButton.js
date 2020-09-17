import React from 'react';
import {Button} from '@material-ui/core';
import API from '../utils/API';


export default function SaveButton(props){

const postToDb = (recipe)=>{
console.log(recipe)
API.saveRecipes(recipe)
.then(()=>console.log(`You added ${recipe.name} to your recipe card holder`))
.catch(err => console.log(err))

}

return(
    <div>
        <Button 
        type="primary"
        size="large"
        color="primary" 
        onClick={()=>
        {postToDb(props)}}>
            Save
        </Button>
    </div>
)

}