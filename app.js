const express = require("express");
const recipesRouter = require("./routes/recipes")
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api/recipe", recipesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});