import useAuthStore from "../store/auth.store";

export default function PlaygroundPage() {
  const { token } = useAuthStore();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for creating a new piece
  };

  const handleDelete = (id: number) => {
    // Logic for deleting a piece
  };

  const handleUpdate = (id: number) => {
    // Logic for updating a piece
  };

  return (
    <main className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Kerry's Playground</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4">Poetry: "The Golden Hour"</h3>
          <img
            src="/assets/react.svg"
            alt="Golden Hour"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            In the golden hour, the world stands still,
            A canvas painted with hues that thrill.
            Shadows stretch, and whispers play,
            As the sun bids adieu to the day.
          </p>
          {token && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleUpdate(1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </section>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4">Daily Rant: "Why Mondays Are the Worst"</h3>
          <img
            src="/assets/react.svg"
            alt="Mondays"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            Mondays always feel like a betrayal. The weekend is over, and suddenly, you're thrust back into the grind.
            Why can't we have three-day weekends instead?
          </p>
          {token && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleUpdate(2)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(2)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </section>
      </div>
      {token && (
        <form onSubmit={handleCreate} className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Create New Piece</h3>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Content</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="Enter content"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Create
          </button>
        </form>
      )}
    </main>
  );
}
