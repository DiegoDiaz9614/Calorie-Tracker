export default function CalorieList({ entries, handleDelete, setEditingId, setForm }) {
  return (
    <ul className="mt-6 space-y-3">
      {entries.map((entry) => (
        <li
          key={entry._id}
          className="flex justify-between items-center p-4 bg-gray-800 border border-purple-600 rounded-lg shadow-md hover:scale-105 hover:border-pink-500 transition-all"
        >
          <div>
            <p className="font-semibold text-pink-300">{entry.description}</p>
            <p className="text-sm text-gray-400">{entry.calories} calories</p>
          </div>
          <div className="space-x-3">
            <button
              onClick={() => {
                setEditingId(entry._id);
                setForm({
                  description: entry.description,
                  calories: entry.calories,
                });
              }}
              className="text-purple-400 hover:text-purple-200 font-semibold"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(entry._id)}
              className="text-pink-500 hover:text-pink-300 font-semibold"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}