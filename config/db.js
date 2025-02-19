const mongoose = required('mongoose');
require('dotenv').config();

const connectionString = "process.env.mongodb+srv://admin:admin@gourmet2go.5jpsj.mongodb.net/";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error){
        console.error('Error connection to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;