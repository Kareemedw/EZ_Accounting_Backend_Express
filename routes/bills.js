const router = require("express").Router();

const { createBill, getBill, deleteBill } = require("../controllers/bills");

//Create
router.post("/", createBill);

//Read
router.get("/", getBill);

//Update

//Delete
router.delete("/:billCardsId", deleteBill);

module.exports = router;
