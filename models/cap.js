const mongoose = require("mongoose")
const capSchema = mongoose.Schema({
type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("cap",
capSchema)