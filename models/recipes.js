const fs = require("node:fs/promises");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid");
const filePath = path.resolve(process.cwd(), "data", "recipes.json");

// GET ALL RECIPES
async function getRecipes() {
  const recipesJSON = await fs.readFile(filePath);
  const recipes = JSON.parse(recipesJSON);
  return recipes;
}

// GET A RECIPE BY ID
async function getRecipeByID(id) {
  const recipesJSON = await fs.readFile(filePath);
  const recipes = JSON.parse(recipesJSON);
  let recipe;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
    }
  }
  return recipe;
}

// CREATE A RECIPE
async function createRecipe(title, ingredients, instructions, image) {
  const recipesJSON = await fs.readFile(filePath);
  const recipes = JSON.parse(recipesJSON);

  const newRecipe = {
    id: uuidv4(),
    title,
    ingredients,
    instructions,
    image
  };

  recipes.push(newRecipe);
  await fs.writeFile(filePath, JSON.stringify(recipes));
  
  return newRecipe;
}

// UPDATE A RECIPE BY ID
async function updateRecipeByID(id, title, ingredients, instructions, image) {
  const recipesJSON = await fs.readFile(filePath);
  const recipes = JSON.parse(recipesJSON);

  let recipe;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      recipes[i].title = title;
      recipes[i].ingredients = ingredients;
      recipes[i].instructions = instructions;
      recipes[i].image = image;
      break;
    }
  }

  await fs.writeFile(filePath, JSON.stringify(recipes));

  return recipe;}

// DELETE A RECIPE BY ID
async function deleteRecipeByID(id) {

  const recipesJSON = await fs.readFile(filePath);
  const recipes = JSON.parse(recipesJSON);

  let recipeIndex = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipeIndex = i;
      break;
    }
  }

  if (recipeIndex !== null) {
    const deletedRecipe = recipes.splice(recipeIndex, 1);
    await fs.writeFile(filePath, JSON.stringify(recipes));
    return deletedRecipe[0];
  }
  return null;
}

module.exports = {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
};
