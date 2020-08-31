const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    item: {//Men,Women
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    scale: {
        type: String,
        required: true
    },
    getDesignerHome: {
        type: Boolean,
        default: false
    },
    haveMaterial: {
        type: String,
        default: false
    },
    contact: {
        type: String
    },
    emailId: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: String
    },
    quantity: {
        type: String
    }
    // ,postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
});

module.exports = mongoose.model("Form", formSchema);

