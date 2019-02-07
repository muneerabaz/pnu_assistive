const admin = (req, res, next) => {
  if (req.user.is_admin) {
    next();
  } else {
    res.status(400).send("access denied");
  }
};

module.exports = admin;
