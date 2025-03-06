const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("./function");

dotenv.config();   
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Register route
app.post("/api/register", async (req, res) => {
    const result = await registerUser(req.body.username, req.body.email, req.body.password);
    res.status(result.error ? 400 : 201).json(result);
});

// Login route
app.post("/api/login", async (req, res) => {
    const result = await loginUser(req.body.email, req.body.password);
    res.status(result.error ? 400 : 200).json(result);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
