const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
email: { type: String, required: true, unique: true },
name: { type: String, required: true },
age: { type: Number },
password: { type: String, required: true },
phoneNumber: { type: Number },
});

module.exports = mongoose.model("User", 
userSchema);