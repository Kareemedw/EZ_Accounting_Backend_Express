const Budget = require("../models/budget");
const {
  INTERNAL_SERVER_ERROR,
  REQUEST_STATUS_OK,
  ITEM_NOT_FOUND,
  BAD_REQUEST_STATUS_CODE,
} = require("../utils/error");

const createCard = (req, res) => {
  console.log(req);
  console.log(req.body);

  const { name, salary, date, utilityBills, recurringBills, additionalBills } =
    req.body;

  Budget.create({
    name,
    date,
    salary,
    utilityBills,
    recurringBills,
    additionalBills,
  })
    .then((card) => {
      console.log(card);
      res.send({ data: card });
    })
    .catch((e) => {
      res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Error from createCard", e });
    });
};

const getItems = (req, res) => {
  Budget.find({})
    .then((card) => res.status(REQUEST_STATUS_OK).send(card))
    .catch((err) => {
      console.error(err);
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error!!" });
    });
};

const updateCard = (req, res) => {
  const { cardId } = req.params;

  Budget.findByIdAndUpdate(cardId, req.body, {
    new: true,
    runValidators: true,
  })
    .orFail()
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error" });
    });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;

  Budget.findByIdAndDelete(cardId)
    .orFail()
    .then((card) => res.status(REQUEST_STATUS_OK).send({ data: card }))
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

module.exports = { createCard, getItems, deleteCard, updateCard };
