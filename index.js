const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
mongoose
    .connect(`${process.env.MONGODB_STRING}`)
    .then(() => {
        console.log("Mongodb connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server fired up at port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
