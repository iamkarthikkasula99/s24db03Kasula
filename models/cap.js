const mongoose = require("mongoose")
const capSchema = mongoose.Schema({
cap_type: String,
cap_size: { type: String, minlength: 1, maxlength: 30 },
cap_cost: { type: Number, min: 0, max: 20000 }
})
module.exports = mongoose.model("cap",capSchema)