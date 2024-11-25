import "dotenv/config";
import express from "express";
import cors from "cors";
import menuRoute from "./routes/menuRoute";
const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use("/api/menu", menuRoute);

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
