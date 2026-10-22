const bcrypt = require("bcrypt");
const User = require("../models/User");

// show register form
exports.showRegister = (req, res) => {
  res.render("register", { error: null });
};

// save new user
exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.render("register", { error: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.render("register", { error: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ fullName, email, password: hashed });
    res.redirect("/login");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// show login form
exports.showLogin = (req, res) => {
  res.render("login", { error: null });
};

// check login and create session
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.render("login", { error: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.render("login", { error: "Invalid email or password" });
    }

    req.session.userId = user._id;
    req.session.userName = user.fullName;
    res.redirect("/rooms");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// destroy session
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};