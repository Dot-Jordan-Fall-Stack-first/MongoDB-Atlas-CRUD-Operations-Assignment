const Item = require("../models/itemSchema");

// CREATE
const createNewItem = async (req, res) => {
  try {
    const { name, category, image } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Name and Category are required",
      });
    }

    const existItem = await Item.findOne({ name });

    if (existItem) {
      return res.status(409).json({
        message: "Item already exists",
      });
    }

    const newItem = await Item.create({
      name,
      category,
      image,
    });

    res.status(201).json({
      message: "New Item created successfully",
      data: newItem,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// READ ALL
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json({
      message: "All items fetched successfully",
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// READ ONE
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({
      message: "Item fetched successfully",
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, image } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, category, image },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// DELETE
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createNewItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};