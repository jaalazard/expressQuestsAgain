require("dotenv").config();
const express = require("express"); // importer express
const app = express(); // initialiser express pour accéder à X méthodes : app.get, app.post, app.put, app.delete...
const port = process.env.APP_PORT; // définir le port sur lequel le serveur va écouter
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  }); // Ecouter les connexions entrantes sur le port 5000

const movieControllers = require("./src/controllers/movieControllers");
const userControllers = require("./src/controllers/userControllers");
const cocktailControllers = require("./src/controllers/cocktailControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

app.get("/api/cocktails", cocktailControllers.getCocktails);
app.get("/api/cocktails/:id", cocktailControllers.getCocktailById);

// node index.js pour lancer le serveur
// Rien ne se passe car need routes, puis stop and start server
// pour éviter de stop and start server à chaque fois, installer nodemon : npm install -g nodemon
// adapter package.json :
/*  "main": "index.js",
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, */

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

// req.params : récupérer les paramètres de l'URL
const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);

// L'objet response = server to client
// Contient x méthodes : res.send, res.json, res.sendFile, res.download, res.redirect, res.render, etc.



