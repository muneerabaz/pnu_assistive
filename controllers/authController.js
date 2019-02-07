const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/users");

router.post("/", user.findEmail, user.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, name, usertype, id } = req.user;
    const token = jwt.sign({ email, name, usertype, id }, process.env.JWT_KEY);
    res.send({ token });
  }
});

router.post("/singup", user.findEmail, user.create, (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {
    // SAME AS // const email = req.user.email ; AND // const name = req.user.name ;

    const { email, name, usertype, id } = req.user;

    console.log(req.user);
    const token = jwt.sign({ email, name, usertype, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.post("/users/clubs", user.findEmail, user.createClubs, (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {
    // SAME AS // const email = req.user.email ; AND // const name = req.user.name ;
    // console.log("\n\n\n\n ****" , process.env)
    const { email, name, usertype, id } = req.user;
    const token = jwt.sign({ email, name, usertype, id }, process.env.JWT_KEY);
    res.send({ token });
  }
});

router.put("/users/:id", user.password_update, (req, res) => {
  res.send({ message: "user has been updated " });
});

// router put
module.exports = router;
