const mongoose = require("mongoose");
const suggestionSchema = new mongoose.Schema({
    username:String,
    image:String
});
module.exports = mongoose.model("Suggestions",suggestionSchema)