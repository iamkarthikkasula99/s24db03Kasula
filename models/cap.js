const mongoose = require("mongoose")
const capSchema = mongoose.Schema({
cap_type: String,
cap_size: String,
cap_cost: Number
})
module.exports = mongoose.model("cap",
capSchema)