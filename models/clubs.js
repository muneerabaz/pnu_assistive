const db = require("../db/config");
const clubs = {};

clubs.getAll = (req, res, next) => {
  db.manyOrNone("SELECT * FROM clubs;")
    .then(data => {
      console.log("--", data);
      res.locals.clubs = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

clubs.byID = (req, res, next) => {
  db.one("SELECT * FROM clubs WHERE club_id=$1;", [req.params.id])
    .then(data => {
      console.log("--", data);
      res.locals.clubs = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

module.exports = clubs;
