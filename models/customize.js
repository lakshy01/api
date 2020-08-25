const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customization"
    },
    name: {//Collar, Cuffs, Pocket
        type: String,
        required: true
    },
    images: []
}, {
    timestamps: true
});

module.exports = mongoose.model("Tag", TagSchema);

const CustomizeSchema = new mongoose.Schema({
    section: {//Men,Women
        type: String,
        required: true
    },
    category: {//Casual, Ethnic, Formal
        type: String,
        required: true
    },
    items: {//Pant, Shirt
        type: String,
        required: true
    },
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "Tag"}]
}, {
    timestamps: true
});

module.exports = mongoose.model("Customization", CustomizeSchema);

