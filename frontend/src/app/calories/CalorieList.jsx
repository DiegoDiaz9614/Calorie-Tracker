'use client'

export default function CalorieList ({entries,handleDelete, setEditingId, setForm}) {
    return (
        <ul>
            {entries.map((entry) => (
                <li key={entry._id} className="flex justify-between border-b py-2">
                    <span>{entry.description}: {entry.calories} kcal</span>
                    <button 
                        onClick={() => handleDelete(entry._id)} 
                        className="text-red-500"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => {
                            setEditingId(entry._id);
                            setForm({description: entry.description, calories: entry.calories});
                        }} 
                        className="text-blue-500 mr-2"
                    >
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    )
}