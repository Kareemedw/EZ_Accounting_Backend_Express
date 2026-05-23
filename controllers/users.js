const User = require("../models/user");
const {
  INTERNAL_SERVER_ERROR,
  REQUEST_STATUS_OK,
  ITEM_NOT_FOUND,
  BAD_REQUEST_STATUS_CODE,
} = require("../utils/error");

const createUser = (req, res) => {
  console.log(req);
  console.log(req.body);

  const { name, avatar } = req.body;

  User.create({
    name,
    avatar,
  })
    .then((user) => {
      console.log(user);
      res.send({ data: user });
    })
    .catch((e) => {
      res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Error from createCard", e });
    });
};

const getUsers = (req, res) => {
  User.find({})
    .then((user) => res.status(REQUEST_STATUS_OK).send(user))
    .catch((err) => {
      console.error(err);
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error!!" });
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail()
    .then((user) => res.status(REQUEST_STATUS_OK).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(ITEM_NOT_FOUND).send({ message: "Item not found" });
      }
      return res
        .status(BAD_REQUEST_STATUS_CODE)
        .send({ message: "Requested resource not found" });
    });
};

module.exports = { createUser, getUsers, getUser };
