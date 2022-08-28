const strategyServices = require("../services/strategyServices");

const controllers = {
    createStrategy: async (req, res) => {
        try {
            const strategy = await strategyServices.createStrategy(req.body);
            if (!strategy) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Strategy not created" });
            }
            return res.status(200).send({ success: 1, strategy: strategy });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getStrategies: async (req, res) => {
        try {
            const strategies = await strategyServices.getStrategies();
            if (!strategies) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Strategies not found" });
            }
            return res.status(200).send({ success: 1, strategies: strategies });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getStrategy: async (req, res) => {
        try {
            const id = req.params.id;
            const strategy = await strategyServices.getStrategy(id);
            if (!strategy) {
                return res
                    .status(400)
                    .send({ success: 0, message: "strategy not found" });
            }
            return res.status(200).send({ success: 1, strategy: strategy });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },
};

module.exports = controllers;
