import Express from "express";
import messagesRoutes from "./routes/message/MessageRoute.js";
import authRoutes from "./routes/auth/authRoute.js";
import { connectToDB } from "./config/db.js";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const app = Express();

//middleware to parse json
app.use(Express.json());

//call the function to connect to DB
connectToDB();

//create simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to link me" });
});

app.use("/auth", authRoutes);
app.use("/message", messagesRoutes);

mongoose.connection.on("open", () => {
  console.log("Connected to mongo db");
  app.listen(4000, (req, res) => {
    console.log(`Server is running on port 4000`);
  });
});
