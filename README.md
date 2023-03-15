# Hackathon - Build a Back End

You'll need to write some code to get this application running. Your server will function as an API like we've been building and also serve an HTML page.

You should see a website at `http://localhost:3000` when the server is running. A very basic front-end (HTML/CSS/JS) is currently served. Don't change the front end yet. You'll start by building a back end that fits its needs.

## Populate

First, using the table below as a guide, get your CRUD routes up and running in your router so that your server listens for requests and serves test/example responses for now.

Remember that you can test your routes with [Postman](https://learning.postman.com/docs/getting-started/sending-the-first-request/) to ensure they're working.

### Requirements table

| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/recipes     |                 | all recipes                               | { success: Boolean, payload: recipe array } |
| GET    | /api/recipes/:id |                 | recipes with a particular id if it exists | { success: Boolean, payload: recipe }       |
| POST   | /api/recipes     | { body }        | create a new recipe                       | { success: Boolean, payload: recipe }       |
| PATCH  | /api/recipes/:id | { body }        | updated recipe                            | { success: Boolean, payload: recipe }       |
| DELETE | /api/recipes/:id |                 | recipe deleted                            | { success: Boolean, payload: recipe }       |

### Create your models

A great way to organize your server's code and modularize for separating concerns is to put the logic that interacts with the data into models and then export and import them where needed - this way, the router only handles the routing.

There is a `recipes.js` file in the `models` folder. It should contain all of the logic that interacts with the recipe collection. Complete the methods in there, so they behave as expected. These functions should be exported so you can use them in other files later.

- `getRecipes` should return an array of all recipes
- `getRecipeByID` should return the particular recipe we are looking for
- `createRecipe` should add a recipe to the collection and return the new recipe
- `updateRecipeByID` should replace the recipe at a certain ID with an updated version and return the new recipe
- `deleteRecipeByID` should remove the specific recipe from the collection, and return the deleted recipe

The recipe data can be found in data/api/recipes.json. The models above should create, read, update and delete recipes from the JSON file.

### Hook up models and routes

Import your model functions into your router. Now the focus is to use the models in the routes you set up earlier. Each endpoint should perform the correct action and serve the response data. The table above outlines the information you need to do this, including the methods, RESTful path, if there should be a body with the request, expected result, and structure of the response.

### Important things to keep in mind

- **Go one by one!** Make a route handler and test it - don't try to write multiple routes and then test them all at once afterwards. Only move on to the following route handler when you're confident the previous one works.
- **Break it down** Make a plan for each route. Start with what's coming in with the request and the response you expect, and then keep breaking the logic to get there down until you can't any further. Treat it like a Codewars and plan out the logic.
- Make sure your responses include the **payload key**, with the value being either a recipe or an array of recipes, as shown in the table above. This is what the front end is expecting in your bonus challenge below!

## Bonus challenges - THESE ARE OPTIONAL!

Try the challenges below when you're confident that all the routes above work and your API is RESTful.

Prioritize helping your peers in other groups with the requirements above if you get to this point. Remember that articulating to others will strengthen your own understanding!

### Join up to the front end

As mentioned above, our server also serves an HTML page as a basic front end, visible when you navigate to `http://localhost:3000` in your browser rather than Postman. You can see this front-end code in the `public` folder.

The fetch requests are already written in the main.js file, so see if you can get the functionality on the front end interacting with your API.

### Add middleware

Add [middleware](https://expressjs.com/en/guide/using-middleware.html) to your app. Ideas include:

- Existing Express middleware (check [the docs](https://expressjs.com/en/resources/middleware.html) to find out more)
- A logger that prints out details of the request to the console
- A count of how many calls your API receives

### Add additional routes

Now that you have your CRUD routes defined and functioning, try to add the following routes:

- Using query data to search recipes by title
- Using query data to search recipes by ingredients

| Method | Path         | Additional Info     | Result                                                                   | Response                                    |
| ------ | ------------ | ------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| GET    | /api/recipes | ?title=beans        | all recipes that contain "beans" in their title for example              | { success: Boolean, payload: recipe array } |
| GET    | /api/recipes | ?ingredients=butter | all recipes that contain "butter" in their ingredients array for example | { success: Boolean, payload: recipe array } |

### Keep improving!

If you have time remaining, brainstorm new features you can add to your app on your server or the front end. This could include styling, additional functionality, error handling, additional query options, and more.
