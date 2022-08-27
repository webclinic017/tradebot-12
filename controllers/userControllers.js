const userServices = require("../services/userServices");

const controllers = {
    registerUser: async (req, res) => {
        try {
            const user = await userServices.registerUser(req.body);
            if (!user) {
                return res
                    .status(400)
                    .send({ success: 0, message: "User not created" });
            }
            return res.status(200).send({ success: 1, userDetails: user });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userServices.getUsers();
            if (!users) {
                return res
                    .status(400)
                    .send({ success: 0, message: "User not found" });
            }
            return res.status(200).send({ success: 1, users: users });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },

    getUser: async (req, res) => {
        try {
            const email = req.params.email;
            const user = await userServices.getUser(email);
            if (!user) {
                return res
                    .status(400)
                    .send({ success: 0, message: "User not found" });
            }
            return res.status(200).send({ success: 1, user: user });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ success: 0, message: error });
        }
    },
};

module.exports = controllers;
