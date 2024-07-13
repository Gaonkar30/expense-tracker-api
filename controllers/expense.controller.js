const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "fasjdfoijfaqr";
const salt = bcrypt.genSaltSync(10);
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
    }else{
        jwt.sign({username,id:userdoc._id},secret,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json({
                id:userdoc._id,
                username:userdoc.username,
            });

        });
    }
  } catch (err) {
    res.json(err);
  }
};
const logout=async(req,res)=>{
    res.cookie('token','').json('ok');
}
