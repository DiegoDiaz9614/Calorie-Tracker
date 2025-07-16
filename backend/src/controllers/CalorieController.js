import CalorieEntry from "../models/CalorieEntry.js";

//GET all the entries
export const getAllCalories = async (req, res) => {
    try {
        console.log("Fetching all calorie entries...");
        const entries = await CalorieEntry.find().sort({ date: -1 });
        console.log("Entries fetched:", entries);
        res.json(entries);
    } catch (error) {
        console.error("Error fetching entries:", error);
        res.status(500).json({ message: error.message });
    }
};


//POST a new entry
export const createCalorieEntry = async (req, res) => {
    const {description, calories} = req.body;
    try{
        const newEntry = new CalorieEntry({description, calories});
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch(error) {
            res.status(500).json({message: error.message});
        }
    };
    
    //DELETE an entry
    export const deleteCalorieEntry = async (req, res) => {
        try{
            const entry = await CalorieEntry.findByIdAndDelete(req.params.id);
            if (!entry) {
                return res.status(404).json({ message: "Entry not found"});
            }
            res.json({message: "Entry Deleted"})
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    }