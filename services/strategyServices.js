const strategyModel = require("../models/strategyModel");

const services = {
    createStrategy: async (strategyObj) => {
        try {
            const { name, type } = strategyObj;
            const strategy = await strategyModel.create({
                name: name,
                type: type,
            });
            return strategy;
        } catch (error) {
            console.log(error);
        }
    },

    getStrategies: async () => {
        try {
            const strategy = await strategyModel.find({});
            return strategy;
        } catch (error) {
            console.log(error);
        }
    },

    getStrategy: async (id) => {
        try {
            const strategy = await strategyModel.findOne({ _id: id });
            return strategy;
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = services;
