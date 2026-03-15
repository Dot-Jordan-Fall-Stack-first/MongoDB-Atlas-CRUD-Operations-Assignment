const userModel = require("../models/userSchema")

let users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" }
];


const getAllUsers = (req, res) => {
  userModel.find().then((result) => {
    res.status(200);
    res.json(result);
  }).catch((err) => {
    res.send(err);
  });
}


const getUserById = (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false
    });
  }

  res.status(200).json({
    message: "User found",
    data: user,
    success: true
  });

};


const updateUser = (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false
    });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.status(200).json({
    message: "User updated successfully",
    data: user,
    success: true
  });

};

const deleteUser = (req, res) => {

  const id = parseInt(req.params.id);

  users = users.filter(user => user.id !== id);

  res.status(200).json({
    message: "User deleted successfully",
    success: true
  });

};

const createNewUser = (req, res) => {
  const { email, name, password, age } = req.body;

  if (!email) {
    return res.status(404).json({
      message: "Email Not Found"
    });
  }

  const user = new userModel({
    email,
    password,
    name,
    age
  });

  user.save()
    .then(() => {
      res.status(201).json({
        message: "New user was created"
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed",
        error: err
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
 
  updateUser,
  deleteUser,
  createNewUser
};