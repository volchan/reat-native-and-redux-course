require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const env = require("./config/env");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = env.MONGO_DB_URL;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => console.log("Connected to mongo instance"));
mongoose.connection.on("error", (err) => console.error("Error connecting to mongo instance", err));

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => console.log("Listening on port 3000"));
