import express from 'express';
import {
    getAllCalories,
    createCalorieEntry,
    deleteCalorieEntry,
    updateCalorieEntry
} from '../controllers/CalorieController.js';

const router = express.Router();

router.get('/', getAllCalories);
router.post('/', createCalorieEntry);
router.delete('/:id', deleteCalorieEntry);
router.put('/:id', updateCalorieEntry);

export default router;