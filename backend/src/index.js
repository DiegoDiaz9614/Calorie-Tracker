import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import CalorieRoutes from './api/CalorieRoutes.js';
import AuthRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/api/calories', CalorieRoutes);
app.use('/api/auth', AuthRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));