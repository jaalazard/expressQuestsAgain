const database = require("../../database");
  
  const getCocktailById = (req, res) => {
    const id = parseInt(req.params.id);
    database
      .query("select * from cocktails where id = ?", [id])
      .then(([cocktails]) => {
        if (cocktails[0] != null) {
          res.json(cocktails[0]);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  

const getCocktails = (req, res) => {
  database
    .query("select * from cocktails")
    .then((result) => {
      const cocktails = result[0];
      res.json(cocktails);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
  
  module.exports = {
    getCocktails,
    getCocktailById,
  };