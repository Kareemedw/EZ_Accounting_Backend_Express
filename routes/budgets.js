const router = require("express").Router();

const {
  createCard,
  getItems,
  deleteCard,
  updateCard,
} = require("../controllers/budgets");

//Create
router.post("/", createCard);

//Read
router.get("/", getItems);

//Update
router.put("/:cardId", updateCard);

//Delete
router.delete("/:cardId", deleteCard);

module.exports = router;
