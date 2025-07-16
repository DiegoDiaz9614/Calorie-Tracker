import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import {
    getAllCalories,
    createCalorieEntry,
    deleteCalorieEntry,
    updateCalorieEntry
} from '../controllers/CalorieController.js';

const router = express.Router();

router.get('/', authenticateToken, getAllCalories);
router.post('/', authenticateToken, createCalorieEntry);
router.delete('/:id', authenticateToken, deleteCalorieEntry);
router.put('/:id', authenticateToken, updateCalorieEntry);

export default router;