const router = require("express").Router();
const Budget = require("./budgets");
const Bill = require("./bills");
const User = require("./users");
const updateRouter = require("./update");
const { INTERNAL_SERVER_ERROR, REQUEST_STATUS_OK } = require("../utils/error");

router.use("/cards", Budget);
router.use("/billCards", Bill);
router.use("/users", User);
router.use("/photos", updateRouter);

router.use((req, res) => {
  res.status(INTERNAL_SERVER_ERROR).send({ message: "Router not found" });
});

module.exports = router;
