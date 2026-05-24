const router = require("express").Router();

const {
  createBill,
  getBill,
  updateBill,
  deleteBill,
} = require("../controllers/bills");

//Create
router.post("/", createBill);

//Read
router.get("/", getBill);

//Update
router.patch("/:billCardId", updateBill);

//Delete
router.delete("/:billCardId", deleteBill);

module.exports = router;
