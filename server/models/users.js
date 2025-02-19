// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Name is required"],
//         },
//         email: {
//             type: String,
//             required: [true, "Email is required"],
//             unique: true,
//             match: [
//                 /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//                 "Please enter a valid email",
//             ],
//         },
//         password: {
//             type: String,
//             required: [true, "Password is required"],
//         },
//         isAdmin: {
//             type: Boolean,
//             default: false, // Set true for admin users
//         },
//     },
//     { timestamps: true }
// );

// // 🔐 Hash password before saving user
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // 🔑 Method to compare passwords
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model("User", userSchema);
// export default User;
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // ✅ Store only hashed passwords
  },
  { timestamps: true }
);

// ✅ Attach the matchPassword method correctly
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
