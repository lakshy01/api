const mongoose = require("mongoose");

const CustomizeSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true
    },
    category: [
        {
            name: {
                type: String,
                required: true
            },
            items: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    tag: [{
                        name: {
                            type: String,
                            required: true
                        },
                        images: []
                    }]
                }
            ]
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model("Customization", CustomizeSchema);
