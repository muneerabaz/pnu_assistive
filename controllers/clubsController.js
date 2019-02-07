const express = require("express");
const router = express.Router();

const clubs = require("../models/clubs");
// const users = require("../models/users");

const sendClubs = (req , res) => res.json(res.locals.clubs)
const sendClub = (req , res ) => res.json(res.locals.clubs)


router.get('/' , clubs.getAll ,sendClubs)
// router.get('/:id' , clubs.byID , sendClub)

module.exports = router;
