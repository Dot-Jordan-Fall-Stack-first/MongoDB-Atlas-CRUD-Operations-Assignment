const express = require('express');

const {
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../Controller/userscontroller")

const usersRouter = express.Router();

usersRouter.get('/all/:id', getUserById);
usersRouter.post('/create', createUser);
usersRouter.put('/update/:id', updateUser);
usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter;