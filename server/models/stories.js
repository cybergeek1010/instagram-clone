const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Story", storySchema);