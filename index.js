import "dotenv/config";
import express from "express";
import cors from "cors";
import menuRoute from "./routes/menuRoute.js";
import orderRoute from "./routes/orderRoute.js";
import userRoute from "./routes/usersRoute.js";
const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use("/api/menu", menuRoute);
app.use("/api/order", orderRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
