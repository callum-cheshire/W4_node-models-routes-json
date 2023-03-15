const url = "http://localhost:3000";

const recipesSection = document.querySelector("#recipes");
const getRecipeButton = document.querySelector("#get-recipes");
const submitButton = document.querySelector("button[type='submit']");
const ingredientButton = document.querySelector("#add-ingredient");
const ingredientsInput = document.querySelector("#ingredients-input");
const ingredientsList = document.querySelector("#ingredients-list");

ingredientButton.addEventListener("click", addIngredient);
submitButton.addEventListener("click", handleSubmit);
getRecipeButton.addEventListener("click", handleClick);

function addIngredient(event) {
  event.preventDefault();

  const li = document.createElement("li");
  const { value } = ingredientsInput;
  if (value === "") {
    return;
  }
  li.innerText = value;
  ingredientsInput.value = "";
  ingredientsList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();

  createRecipe();
}

async function createRecipe() {
  console.log(gatherFormData());
  const response = await fetch(`${url}/api/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const title = document.querySelector("#title").value;
  const ingredientsList = document.querySelectorAll("#ingredients-list > li");
  const ingredients = Array.from(ingredientsList).map((li) => li.innerText);
  const instructions = document.querySelector("#instructions").value;
  const image = document.querySelector("#image-url").value;
  return {
    title,
    ingredients,
    instructions,
    image,
  };
}

function handleClick(event) {
  event.preventDefault();
  getRecipes();
}

async function getRecipes() {
  const response = await fetch(`${url}/api/recipes`);
  const { payload } = await response.json();
  recipesSection.innerHTML = "";
  console.log(payload);
  payload.forEach(renderRecipe);
}

function renderRecipe(recipe) {
  const article = createRecipeView(recipe);
  recipesSection.appendChild(article);
}

function createRecipeView({ title, ingredients, instructions, image }) {
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const p = document.createElement("p");
  p.innerText = instructions;
  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  const list = createIngredientsList(ingredients);
  article.appendChild(h2);
  article.appendChild(img);
  article.appendChild(list);
  article.appendChild(p);
  return article;
}

function createIngredientsList(ingredients) {
  const ul = document.createElement("ul");
  ingredients.map(createIngredient).forEach(function (item) {
    ul.appendChild(item);
  });
  return ul;
}

function createIngredient(ingredient) {
  const li = document.createElement("li");
  li.innerHTML = ingredient;
  return li;
}

getRecipes();
