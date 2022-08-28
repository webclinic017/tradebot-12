const productServices = require("../services/productServices");

const controllers = {
    createProduct: async (req, res) => {
        try {
            const product = await productServices.createProduct(req.body);
            if (!product) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Product not created" });
            }
            return res.status(200).send({ success: 1, product: product });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getProducts: async (req, res) => {
        try {
            const products = await productServices.getProducts();
            if (!products) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Products not found" });
            }
            return res.status(200).send({ success: 1, products: products });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await productServices.getProduct(id);
            if (!product) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Product not found" });
            }
            return res.status(200).send({ success: 1, product: product });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },
};

module.exports = controllers;
