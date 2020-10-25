const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  _id:{ type: Number, required: true },
  title: { type: String, required: true },
  image:{type:String,required:true},
  ingredients:[{type:String}]
  

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;