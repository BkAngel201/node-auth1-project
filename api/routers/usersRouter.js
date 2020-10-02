const express = require("express");

const router = express.Router();

const Users = require("../models/usersModel");

router.get("/", (req, res) => {
  Users.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Error retrieving user info from DB" });
    });
});

module.exports = router;
