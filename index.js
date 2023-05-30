import Express from "express";
import messagesRoutes from "./routes/message/MessageRoute.js";
import user_router from "./routes/message/user.js";
const app = Express();

//middleware to parse json
app.use(Express.json());

//create simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to link me" });
});

app.use("/message", messagesRoutes);
app.use("/message/user", user_router);

app.listen(4000, (req, res) => {
  console.log(`Server is running on port 4000`);
});
