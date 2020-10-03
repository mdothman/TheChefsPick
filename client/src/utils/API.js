import axios from "axios";

export default {
    getRecipes: function(){
        return axios.get('/api/recipes')
    },
    
    getSingleRecipe: function(id){
        return axios.get('/api/recipes'+ id)
    },

    deleteRecipe: function(id){
        return axios.delete('/api/recipes/'+ id)
    },

    saveRecipes: function(recipeData) {
        return axios.post('/api/recipes', recipeData)
    },
    getRandomRecipe:() => axios.get('/api/spoon')

}


