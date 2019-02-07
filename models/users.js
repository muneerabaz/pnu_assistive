var db = require("../db/config");
var bcrypt = require("bcrypt");
var user = {};
// var admin = {};

user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE email = $1;", [req.body.email])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password_digest)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE email=$1;", [req.body.email])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.password_update = (req, res, next) => {
  console.log("*****!!", req.body);
  const salt = bcrypt.genSaltSync(10);
  db.one("UPDATE users SET password_digest = $1 WHERE id = $2 RETURNING *;", [
    bcrypt.hashSync(req.body.password_digest, salt),
    req.params.id
  ])
    .then(data => {
      res.locals.updatedStatus = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

user.create = (req, res, next) => {
  console.log("^^^^^^", req.body.email);
  const salt = bcrypt.genSaltSync(10);
  db.one(
    // "INSERT INTO users ( email, password_digest) VALUES($1, $2 ) RETURNING  email , user_type as userType;",
    "INSERT INTO users ( email, password_digest) VALUES($1, $2) RETURNING id",
    [req.body.email.toLowerCase(), bcrypt.hashSync(req.body.password, salt)]
  )
    .then(function(result) {
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

//not ------
user.createClubs = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (email, password_digest) VALUES($1, $2) RETURNING id",
    [
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password_digest, salt),
      req.body.userType.toLowerCase()
    ]
  )
    .then(function(result) {
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

module.exports = user;

// only the admin can create a new club
// admin.create = (req, res, next) => {
//   const salt = bcrypt.genSaltSync(10);
//   db.one(
//     "INSERT INTO users (name , email, password_digest) VALUES($1, $2 , $3) RETURNING  email , name ",
//     [
//       req.body.name.toLowerCase(),
//       req.body.email.toLowerCase(),
//       bcrypt.hashSync(req.body.password, salt)
//     ]
//   )
//     .then(function(result) {
//       req.user = result;
//       next();
//     })
//     .catch(function(error) {
//       console.log(error);
//       next();
//     });
// };
