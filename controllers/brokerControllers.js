const brokerServices = require("../services/brokerServices");

const controllers = {
    createBroker: async (req, res) => {
        try {
            const broker = await brokerServices.createBroker(req.body);
            if (!broker) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Broker not created" });
            }
            return res.status(200).send({ success: 1, broker: broker });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getBrokers: async (req, res) => {
        try {
            const brokers = await brokerServices.getBrokers();
            if (!brokers) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Brokers not found" });
            }
            return res.status(200).send({ success: 1, brokers: brokers });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getBroker: async (req, res) => {
        try {
            const id = req.params.id;
            const broker = await brokerServices.getBroker(id);
            if (!broker) {
                return res
                    .status(400)
                    .send({ success: 0, message: "broker not found" });
            }
            return res.status(200).send({ success: 1, broker: broker });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },
};

module.exports = controllers;
