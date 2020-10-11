import React  from 'react';
import {Search} from "../components";
import API from '../utils/API';



export default function Home(){
  const [ingredients, setIngredients] = React.useState([]);
  
 
  let timeout = null
  const handleInputChange = (event, newInputValue) => {
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
              newInputValue.length === 0? console.log("Nothing"):
              API.getAutocomplete(newInputValue)
              .then(({data}) => setIngredients(data))
              .catch(err => console.log(err));
            }, 1000)
          }
  
return (
        <div>
          <Search
          onInputChange={handleInputChange}
          ingredients={ingredients}
          />
        </div>
      );

    
}