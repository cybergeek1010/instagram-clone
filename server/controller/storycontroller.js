const Story = require("../models/stories");

const getStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getStories };