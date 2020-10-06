import React, { Fragment, useState, useEffect } from 'react';
import { Search} from "../components";
import API from '../utils/API';


export default function Home(){
//   const [randomRecipe, setRandomRecipe] = useState([]);
//   useEffect(()=>loadRandomRecipe(),[]);

//  const  loadRandomRecipe = () => {
//     API.getRandomRecipe()
//      .then(res => console.log(res))
//     .catch(err => console.log(err));
//   }
const [autocomplete, setAutocomplete] = useState([]);
useEffect(()=>loadAutocomplete(),[]);

const loadAutocomplete = () => {
  API.getAutocomplete()
  .then(res => console.log(res))
  .catch(err => console.log(err));
}


  return (
        <div>
          {Search(autocomplete)}
        </div>
      );

    
}