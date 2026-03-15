const { default: mongoose } = require("mongoose");

const itemschema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  category: {type: String, required: true,
    enum: ["elect", "clothing", "heathy"]
  }
});

module.exports = mongoose.model("Item", itemschema);