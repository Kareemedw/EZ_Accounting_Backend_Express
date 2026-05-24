const Bill = require("../models/bill");
const {
  INTERNAL_SERVER_ERROR,
  REQUEST_STATUS_OK,
  ITEM_NOT_FOUND,
  BAD_REQUEST_STATUS_CODE,
} = require("../utils/error");

const createBill = (req, res) => {
  console.log(req);
  console.log(req.body);

  const { name, price, category, isRecurring, dueDate } = req.body;

  Bill.create({ name, price, category, isRecurring, dueDate })
    .then((billCard) => {
      console.log(billCard);
      res.send({ data: billCard });
    })
    .catch((e) => {
      res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Error from createCard", e });
    });
};

const getBill = (req, res) => {
  Bill.find({})
    .then((billCard) => res.status(REQUEST_STATUS_OK).send(billCard))
    .catch((err) => {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error!!" });
    });
};

const updateBill = (req, res) => {
  const { billCardId } = req.params;

  Bill.findByIdAndUpdate(billCardId, req.body, {
    new: true,
    runValidators: true,
  })
    .orFail()
    .then((billCard) => res.status(200).send({ data: billCard }))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST_STATUS_CODE)
          .send({ message: "Invalid item ID" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res
          .status(ITEM_NOT_FOUND)
          .send({ message: "Requested resource not found" });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error!!" });
    });
};

const deleteBill = (req, res) => {
  const { billCardId } = req.params;

  Bill.findByIdAndDelete(billCardId)
    .orFail()
    .then((billCard) => res.status(REQUEST_STATUS_OK).send({ data: billCard }))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST_STATUS_CODE)
          .send({ message: "Invalid item ID" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res
          .status(ITEM_NOT_FOUND)
          .send({ message: "Requested resource not found" });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error!!" });
    });
};

module.exports = { createBill, getBill, updateBill, deleteBill };
