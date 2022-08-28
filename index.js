"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//all routes
const userRoutes = require("./routes/userRoutes");
const strategyRoutes = require("./routes/strategyRoutes");
const brokerRoutes = require("./routes/brokerRoutes");
const positionRoutes = require("./routes/positionRoutes");
const productRoutes = require("./routes/productRoutes");

//port
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//routing
app.use("/api/users", userRoutes);
app.use("/api/strategy", strategyRoutes);
app.use("/api/broker", brokerRoutes);
app.use("/api/position", positionRoutes);
app.use("/api/product", productRoutes);

//DB connection and server starting
mongoose
    .connect(`${process.env.MONGODB_STRING}`)
    .then(() => {
        console.log("Mongodb connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server fired up at port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
