const express = require("express");
const recipesRouter = express.Router();

const {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} = require("../models/recipes")

recipesRouter.get("/", async function (req , res) {
  const allRecipes = await getRecipes();
  res.status(200).json(allRecipes);
})

recipesRouter.get("/:id", async function (req , res) {
  const recipes = await getRecipeByID(req.params.id);
  res.status(200).json(recipes);
})

recipesRouter.post("/", async function (req, res) {
  let addedRecipe = await createRecipe(req.body.title, req.body.ingredients, req.body.instructions, req.body.image)
  res.status(200).json(addedRecipe);
});

recipesRouter.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const ingredients = req.body.ingredients;
  const instructions = req.body.instructions;
  const image = req.body.image;
  const updatedrecipe = await updateRecipeByID(id, title, ingredients, instructions, image);
  res.status(200).json(updatedrecipe);
});

recipesRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const deletedRecipe = await deleteRecipeByID(id);
  res.status(200).json(deletedRecipe)
})


module.exports = recipesRouter;