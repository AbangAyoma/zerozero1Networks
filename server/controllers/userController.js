import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Registration
// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     user = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// User Login
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Ensure the password is hashed before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPassword, // ✅ Store only the hashed password
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentialssssss" });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Get User Profile
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log("❌ User not found:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("✅ User found:", user);

//     // const isMatch = await bcrypt.compare(password, user.password);
//     const isMatch = await user.matchPassword(password);

//     if (!isMatch) {
//       console.log("❌ Password does not match for:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("✅ Password matches!");

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("✅ User found:", user);

    // ✅ Use matchPassword function
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      console.log("❌ Password does not match for:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("✅ Password matches!");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserProfile = (req, res) => {
  res.json({ message: "User profile data" });
};
