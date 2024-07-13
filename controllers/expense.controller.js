const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "fasjdfoijfaqr";
const salt = bcrypt.genSaltSync(10);
const expense = require("../models/expense");
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userdoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userdoc);
  } catch (err) {
    console.log("registration error ", err);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userdoc = await User.findOne({ username });
    if (!userdoc) {
      res.json({ message: "user not found" });
    }
    const userok = bcrypt.compareSync(password, userdoc.password);
    if (!userok) {
      res.json({ message: "password not match" });
    } else {
      jwt.sign({ username, id: userdoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userdoc._id,
          username: userdoc.username,
        });
      });
    }
  } catch (err) {
    res.json(err);
  }
};
const logout = async (req, res) => {
  res.cookie("token", "").json("ok");
};
const createexpense = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const { id } = req.params;
    const token = req.cookies.token;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const expensedoc = await expense.create({
        title,
        description,
        price,
        userId: info.id,
      });
      res.json(expensedoc);
    });
  } catch (err) {
    res.json(err);
  }
};
const removeexpense = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const expensedoc = await expense.findByIdAndDelete(id);
      res.json(expensedoc);
    });
  } catch (err) {
    res.json(err);
  }
};
const updateexpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const token = req.cookies.token;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const expensedoc = await expense.findByIdAndUpdate(
        id,
        { title, description, price },
        { new: true }
      );
      res.json(expensedoc);
    });
  } catch (err) {
    res.json(err);
  }
};
const getExpense = async (req, res) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      //find expense by time range?
      const startdate = req.query.startDate;
      const enddate = req.query.endDate;
      const expenses = await expense.find({
        userId: info.id,
        createdAt: { $gte: startdate, $lte: enddate },
      });
      res.json(expenses);
    });
  } catch (err) {
    res.json(err);
  }
};
