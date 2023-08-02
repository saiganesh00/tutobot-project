const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name"],
    },
    email: {
        type: String,
        required: [true, "Please add the email"],
    },
    mobile: {
        type: String,
        required: [true, "Please add the email"],
    },
    password: {
        type: String,
        required: [true, "Please add the email"],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("signUp", userSchema);