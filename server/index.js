const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/ToDoRoutes");
const database = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Database connect
database.connect();

// Routes
app.use("/api/v1", routes);

// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
