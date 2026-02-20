// // const mongoose = require("mongoose");
// import mongoose from "mongoose";

// const recipeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String
//   },
//   ingredients: {
//     type: [String],
//     required: true
//   },
//   instructions: {
//     type: String,
//     required: true
//   },
//   cookingTime: {
//     type: Number
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // module.exports = mongoose.model("Recipe", recipeSchema);
// const recipe=mongoose.model("Recipe", recipeSchema);
// export default recipe;

import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;