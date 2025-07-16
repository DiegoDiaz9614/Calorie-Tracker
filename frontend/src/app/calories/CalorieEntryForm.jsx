'use client';

export default function CalorieEntryForm({ form,setForm,handleSubmit, editingId, setEditingId }) {
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
            <button type="submit" className="bg-blue-500 text-white p-2">{editingId ? 'Update Entry' : 'Add Entry'}</button>

            {editingId && (
                <button type="button" onClick={() => {
                    setForm({ description: '', calories: ''})
                    setEditingId(null);
                }}
                className="bg-red-500 text-black p-2 ml-2">
                    Cancel
                </button>
            )}
        </form>
    )
} 