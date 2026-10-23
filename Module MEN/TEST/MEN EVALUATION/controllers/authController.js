const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.showRegister = (req, res) => {
  res.render("register", { error: null });
};

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);
    await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password: hashed,
    });
    res.redirect("/login");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.showLogin = (req, res) => {
  res.render("login", { error: null });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: (email || "").toLowerCase().trim() });
    if (!user) {
      return res.render("login", { error: "Wrong email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.render("login", { error: "Wrong email or password" });
    }

    req.session.userId = user._id.toString();
    req.session.userName = user.fullName;
    res.redirect("/posts");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
