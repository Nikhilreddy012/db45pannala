const mongoose = require("mongoose")
const newspaperSchema = mongoose.Schema({
name: String,
language: String,
price: Number
})
module.exports = mongoose.model("Newspaper", newspaperSchema)