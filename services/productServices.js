const productModel = require("../models/productModel");

const services = {
    createProduct: async (productObj) => {
        try {
            const { name, price, duration } = productObj;
            const product = await productModel.create({
                name: name,
                price: price,
                duration: duration,
            });
            return product;
        } catch (error) {
            console.log(error);
        }
    },

    getProducts: async () => {
        try {
            const products = await productModel.find({});
            return products;
        } catch (error) {
            console.log(error);
        }
    },

    getProduct: async (id) => {
        try {
            const product = await productModel.findOne({ _id: id });
            return product;
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = services;
