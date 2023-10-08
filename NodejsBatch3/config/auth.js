const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

//guard
const verifyUser = function (req, res, next) {
  try {
    //we have to receive the token first from client..
    const token = req.headers.authorization.split(" ")[1];
    const verify_token = jwt.verify(token, "neosphere");

    console.log(verify_token);
    console.log(verify_token._id);

    User.findOne({ _id: verify_token._id })
      .then(function (user) {
        //all the data of the logged in user is stored in user
        // console.log(user);
        req.userData = user;
        next();
      })
      .catch(function (e) {
        res.status(401).json({ msg: "You are not authenticated " });
      });
  } catch (e) {
    res.status(401).json({ msg: "You are not authenticated " });
  }
};

module.exports = { verifyUser };
