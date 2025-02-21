const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_URI || "mongodb+srv://admin:admin@gourmet2go.5jpsj.mongodb.net/";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;