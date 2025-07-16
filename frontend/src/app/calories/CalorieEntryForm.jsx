"use client";

export default function CalorieEntryForm({
  form,
  setForm,
  handleSubmit,
  editingId,
  setEditingId,
  loading,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full p-3 bg-gray-800 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="number"
        placeholder="Calories"
        value={form.calories}
        onChange={(e) => setForm({ ...form, calories: e.target.value })}
        className="w-full p-3 bg-gray-800 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <div className="flex space-x-3">
        <button
          type="submit"
          disabled={loading}
          className={`flex-1 py-3 rounded-lg font-semibold text-white shadow-lg transition-all ${
            editingId
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-pink-600 hover:bg-pink-700"
          } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {loading ? "Saving..." : editingId ? "Update" : "Add"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm({ description: "", calories: "" });
              setEditingId(null);
            }}
            className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
