import mongoose from 'mongoose';

const calorieEntrySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const CalorieEntry = mongoose.model('CalorieEntry', calorieEntrySchema);
export default CalorieEntry;
