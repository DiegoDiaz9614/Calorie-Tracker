'use client'

export default function CalorieList ({entries,handleDelete}) {
    return (
        <ul>
            {entries.map((entry) => (
                <li key={entry._id} className="flex justify-between border-b py-2">
                    <span>{entry.description}: {entry.calories} kcal</span>
                    <button 
                        onClick={() => handleDelete(entry.id)} 
                        className="text-red-500"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}