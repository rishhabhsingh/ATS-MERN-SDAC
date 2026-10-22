require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// so navbar can check login in every view
app.use((req, res, next) => {
  res.locals.loggedIn = req.session.userId ? true : false;
  res.locals.userName = req.session.userName;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/rooms");
});

app.use("/", authRoutes);
app.use("/rooms", roomRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));