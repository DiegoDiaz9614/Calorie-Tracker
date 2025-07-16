import express from 'express';
import {
    getAllCalories,
    createCalorieEntry,
    deleteCalorieEntry
} from '../controllers/CalorieController.js';

const router = express.Router();

router.get('/', getAllCalories);
router.post('/', createCalorieEntry);
router.delete('/:id', deleteCalorieEntry);

export default router;