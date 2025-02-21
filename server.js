import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB(); // Connect to db

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('API is running...');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
