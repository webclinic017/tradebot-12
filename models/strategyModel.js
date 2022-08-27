const mongoose = require("mongoose");

const strategySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
            default: "Intraday",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Strategy", strategySchema);
