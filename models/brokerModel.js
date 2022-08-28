const mongoose = require("mongoose");

const brokerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        appId: {
            type: String,
            required: true,
            unique: true,
        },
        appSecret: {
            type: String,
            required: true,
            unique: true,
        },
        authToken: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Broker", brokerSchema);
