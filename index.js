const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

const app = express(); //express application initialiation

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//for correct prod deployment. It will provide the functionality to identify
// what routes are for frontend and what is the destination
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("server started on port 5000"));
