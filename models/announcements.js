const db = require("../db/config");
const announcement = {};

announcement.getAll = (req, res, next) => {
  db.manyOrNone("SELECT * FROM announcements;")
    .then(data => {
      console.log("--", data);
      res.locals.announcements = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

announcement.byId = (req, res, next) => {
  db.one("SELECT * FROM announcements where announcement_id=$1;", [
    req.params.id
  ])
    .then(data => {
      console.log("--", data);
      announcement = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

announcement.delete = (req, res, next) => {
  db.none(
    'DELETE FROM announcements WHERE announcement_id=$1',
    [req.params.announcement_id]
      .then(function() {
        console.log("successful delete");
        next();
      })
      .catch(function(error) {
        console.log(error);
        next();
      })
  );
};

announcement.create = (req, res, next) => {
  db.one(
    "INSERT INTO announcements (club_id,subject ,type , period , day , hours ,issue_date ,link) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
    [
      req.body.club_id,
      req.body.subject,
      req.body.type,
      req.body.period,
      req.body.day,
      req.body.hours,
      new Date(),
      req.body.link
    ]
  )

    .then(data => {
      res.locals.announcement = data;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

module.exports = announcement;
