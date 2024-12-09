import "dotenv/config";
import express from "express";
import cors from "cors";
import menuRoute from "./routes/menuRoute.js";
import orderRoute from "./routes/orderRoute.js";
import userRoute from "./routes/usersRoute.js";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8081;

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

console.log("DB Host:", process.env.DB_HOST); // 應該輸出 localhost 或你在 .env 中設定的值
console.log("Current working directory:", process.cwd());
