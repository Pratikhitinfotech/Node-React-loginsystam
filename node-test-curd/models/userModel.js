const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String

}, { timestamps: true })

const User = new mongoose.model("usercollection", userSchema)

module.exports = User;