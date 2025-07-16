'use client';

export default function CalorieEntryForm({ form,setForm,handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input 
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
                className="border p-2 mr-2"
            />
            <input 
                type="number"
                placeholder="Calories"
                value={form.calories}
                onChange={(e) => setForm({...form, calories: e.target.value})}
                className="border p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Entry</button>
        </form>
    )
} 