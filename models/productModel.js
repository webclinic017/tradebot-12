const mongooose = require("mongoose");

const productSchema = mongooose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongooose.model("Product", productSchema);
