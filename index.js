const express = require("express");
const usersRouter = require("./routes/users");
const itemRouter = require("./routes/item.routers");
const app = express();
const PORT = 5000;
require("./models/db");


app.use(express.json());

app.use("/users", usersRouter);
app.use("/items", itemRouter);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});