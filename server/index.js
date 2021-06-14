const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Routes
const userRoutes = require("./routes/userRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

// Application connection port
const port = 5000;

// Database URI
const MONGO_DB = process.env.DB_URI;

// Middlewares
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  });

// Application main routes
app.use("/user", userRoutes);
app.use("/favorites", favoriteRoutes);
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
