const express = require("express");

const { 
  createNewItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
} = require("../Controller/item.Controller");

const itemRouter = express.Router();

itemRouter.post("/create", createNewItem);
itemRouter.get("/all", getAllItems);
itemRouter.get("/:id", getItemById);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);
module.exports = itemRouter;