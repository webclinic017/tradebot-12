const userModel = require("../models/userModel");

const services = {
    registerUser: async (userObj) => {
        try {
            const { name, mobile, email, password } = userObj;
            const user = await userModel.create({
                name: name,
                mobile: mobile,
                email: email,
                password: password,
            });
            return user;
        } catch (error) {
            console.log(error);
        }
    },

    getUsers: async () => {
        try {
            const user = await userModel.find({});
            return user;
        } catch (error) {
            console.log(error);
        }
    },

    getUser: async (email) => {
        try {
            const user = await userModel.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = services;
