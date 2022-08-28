const positionModel = require("../models/positionModel");

const services = {
    createPosition: async (positionObj) => {
        try {
            const { script, buyPrice, sellPrice, profitAndLoss } = positionObj;
            const position = await positionModel.create({
                script: script,
                buyPrice: buyPrice,
                sellPrice: sellPrice,
                profitAndLoss: profitAndLoss,
            });
            return position;
        } catch (error) {
            console.log(error);
        }
    },

    getPositions: async () => {
        try {
            const positions = await positionModel.find({});
            return positions;
        } catch (error) {
            console.log(error);
        }
    },

    getPosition: async (id) => {
        try {
            const position = await positionModel.findOne({ _id: id });
            return position;
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = services;
