const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("./models/User"); // Assuming you have a User model
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// Email setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/**
 * Registers a new user
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @returns {object} User data or error message
 */
const registerUser = async (username, email, password) => {
    if (!username || !email || !password) {
        return { error: "All fields are required" };
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return { error: "Email already in use" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Send welcome email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Gourmet App!",
        text: `Hello ${username}, welcome to our app!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Email error:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });

    return { message: "User registered successfully", user: newUser };
};

/**
 * Logs in a user
 * @param {string} email
 * @param {string} password
 * @returns {object} JWT token and user data or error message
 */
const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return { error: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { error: "Invalid email or password" };
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    return { token, user: { id: user._id, username: user.username, email: user.email } };
};

module.exports = { registerUser, loginUser };
