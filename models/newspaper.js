const mongoose = require("mongoose")
const newspaperSchema = mongoose.Schema({
name: {
    type: String,
    minLength: 5
},
language: String,
price: {
    type: Number,
    min: 1,
    max: 10
}
})
module.exports = mongoose.model("Newspaper", newspaperSchema)