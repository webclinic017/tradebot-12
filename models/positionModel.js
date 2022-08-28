const mongoose = require("mongoose");

const positionSchema = mongoose.Schema(
    {
        script: {
            type: String,
            required: true,
            unique: true,
        },
        buyPrice: {
            type: Number,
            default: 0,
        },
        sellPrice: {
            type: Number,
            default: 0,
        },
        profitAndLoss: {
            type: Number,
            default: 0,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Position", positionSchema);
