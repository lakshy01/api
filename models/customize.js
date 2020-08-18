const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    items: []
});

const CustomizeSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true
    },
    category: [ItemsSchema]
});

module.exports = mongoose.model("Customization", CustomizeSchema);
