

let users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" }
];





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
const createUser = (req, res) => {

  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser,
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

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser
};