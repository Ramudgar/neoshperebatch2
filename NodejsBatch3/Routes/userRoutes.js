const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// api to save user data
router.post("/users/savedata", (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    res.status(400).json({ msg: "Data not found" });
    return;
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: data.password,
    age: data.age,
    role: data.role,
    contactNumber: data.contactNumber,
  });

  user.save()
    .then((user_data) => {
      res.status(201).json({ msg: "Data inserted", success: true, user_data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err, success: false });
    });
});


// api to get all user data
router.get("/user/getdata", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ msg: "data fetched successfully", success: true, users });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});


// async await api to get user data by id
router.get("/users/getdata/:id", async (req, res) => {
  try {
    const id=req.params.id;
    const user = await User.findById(id);
    res.json({ msg: "data fetched successfully", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});

// api to update user data by user id also use async await but use findOneAndUpdate method
router.put("/users/updatedata/:id", async (req, res) => {
  const data = req.body;
  const user_id = req.params.id;

  if (!data) {
    return res.status(400).json({ msg: "Data not found", success: false });
  }

  try {
    const user = await User.findById(user_id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    const updatedFields = {
      name: data.name || user.name,
      email: data.email || user.email,
      password: data.password || user.password,
      role: data.role || user.role,
      contactNumber: data.contactNumber || user.contactNumber,
    };

    const updatedUser = await User.findOneAndUpdate(
      { _id: user_id },
      { $set: updatedFields },
      { new: true }
    );

    res.json({ msg: "Data updated", success: true, updatedUser });
  } catch (error) {
    res.status(500).json({ msg: error.message, success: false });
  }
});

module.exports = router;
