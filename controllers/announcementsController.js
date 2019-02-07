const express = require("express");
const router = express.Router();

const announcements = require("../models/announcements")
// const users = require("../models/users");

const sendAnnouncements = (req , res) => res.json(res.locals.announcements)
const sendAnn = (req, res) => res.json(res.locals.announcement);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/' ,announcements.getAll , sendAnnouncements );
router.post('/', announcements.create, sendAnn);

router.delete('/:id', announcements.delete, sendSuccess);

module.exports = router;
