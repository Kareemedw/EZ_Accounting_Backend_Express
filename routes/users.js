const router = require("express").Router();

const { createUser, getUsers, getUser } = require("../controllers/users");

//Create
router.post("/", createUser);

//Read
router.get("/", getUsers);
router.get("/:userId", getUser);

//Update

//Delete

module.exports = router;
