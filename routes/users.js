const express = require('express');

const {
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  createNewUser
} = require("../Controller/userscontroller");

const usersRouter = express.Router();

usersRouter.get('/all', getAllUsers);
usersRouter.get('/:id', getUserById);
usersRouter.put('/update/:id', updateUser);
usersRouter.delete('/delete/:id', deleteUser);
usersRouter.post('/create', createNewUser);


module.exports = usersRouter;