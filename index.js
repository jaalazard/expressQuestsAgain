const express = require("express"); // importer express
const app = express(); // initialiser express pour accéder à X méthodes : app.get, app.post, app.put, app.delete...
const port = 5000; // définir le port sur lequel le serveur va écouter
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  }); // Ecouter les connexions entrantes sur le port 5000

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

const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];

const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};

const getCocktailById = (req, res) => {
    const cocktail = cocktails.find((cocktail) => cocktail.id == req.params.id);
  if (cocktail) {
    res.status(200).json(cocktail);
  } else {
    res.status(404).send("Not found !");
  }
}

app.get("/api/cocktails", getCocktails);

app.get("/api/cocktails/:id", getCocktailById);
