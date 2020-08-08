const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const env = require("../config/env");

const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status("401").send({ error: "You must be logged in." });

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status("401").send({ error: "You must be logged in." });
    }

    const user = await User.findById(payload.userId);
    req.user = user;

    next();
  });
};
