const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profit: {
            type: Number,
            default: 0,
        },
        loss: {
            type: Number,
            default: 0,
        },
        strategy: {
            type: String,
        },
        payment: {
            type: String,
            createdAt: parseInt(Date.now() / 1000),
        },
        positionLogs: [
            {
                position: {
                    type: String,
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
