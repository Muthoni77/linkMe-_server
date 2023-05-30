import User from "../models/user.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "dotenv";

    export const register = async (req, res) => {

  try {
    const { name, email, password, phone } = req.body;
   
    const user = await User.findOne(email);
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists", data: null });
    }
    const hash_pass = await bcrypt.hash(password, 10);
    const new_user = await User.create({
      name,
      email,
      phone,
      password: hash_pass,
    });
    if (!new_user) {
      return res
        .status(400)
        .json({ success: false, message: "user not created", data: null });
    }
    const token = Jwt.sign({ data: new_user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({
        success: true,
        message: "User created",
        data: { user: new_user, token },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, data: null });
  }
};


