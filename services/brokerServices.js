const brokerModel = require("../models/brokerModel");

const services = {
    createBroker: async (brokerObj) => {
        try {
            const { name, userId, password, appId, appSecret, authToken } =
                brokerObj;
            const broker = await brokerModel.create({
                name: name,
                userId: userId,
                password: password,
                appId: appId,
                appSecret: appSecret,
                authToken: authToken,
            });
            return broker;
        } catch (error) {
            console.log(error);
        }
    },

    getBrokers: async () => {
        try {
            const brokers = await brokerModel.find({});
            return brokers;
        } catch (error) {
            console.log(error);
        }
    },

    getBroker: async (id) => {
        try {
            const broker = await brokerModel.findOne({ _id: id });
            return broker;
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = services;
