const router = require("express").Router();
const upload = require("../utils/multer");
const { INTERNAL_SERVER_ERROR, REQUEST_STATUS_OK } = require("../utils/error");

router.post("/upload", upload.single("photo"), (req, res) => {
  res
    .status(201)
    .send({
      imageUrl: `http://localhost:4001/uploads/${req.file.filename}`,
    })
    .catch((e) => {
      res.status(INTERNAL_SERVER_ERROR).send({ message: "File not found", e });
    });
});

module.exports = router;
