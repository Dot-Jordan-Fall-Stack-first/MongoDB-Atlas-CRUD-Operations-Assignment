const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log("Ready To Use your DB");
}).catch((err) => {
    console.log(err);
});