require("./models/Track");
require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const env = require("./config/env");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = env.MONGO_DB_URL;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () =>
  console.log("Connected to mongo instance")
);
mongoose.connection.on("error", (err) =>
  console.error("Error connecting to mongo instance", err)
);

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => console.log("Listening on port 3000"));
