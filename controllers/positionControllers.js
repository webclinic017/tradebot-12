const positionServices = require("../services/positionServices");

const controllers = {
    createPosition: async (req, res) => {
        try {
            const position = await positionServices.createPosition(req.body);
            if (!position) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Position not created" });
            }
            return res.status(200).send({ success: 1, position: position });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getPositions: async (req, res) => {
        try {
            const positions = await positionServices.getPositions();
            if (!positions) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Positions not found" });
            }
            return res.status(200).send({ success: 1, positions: positions });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getPosition: async (req, res) => {
        try {
            const id = req.params.id;
            const position = await positionServices.getPosition(id);
            if (!position) {
                return res
                    .status(400)
                    .send({ success: 0, message: "Position not found" });
            }
            return res.status(200).send({ success: 1, position: position });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },
};

module.exports = controllers;
