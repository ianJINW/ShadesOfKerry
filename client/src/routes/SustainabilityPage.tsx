import useAuthStore from "../store/auth.store";

export default function SustainabilityPage() {
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
      <h2 className="text-5xl font-extrabold mb-10 text-center">Sustainability</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">Article: "5 Easy Ways to Reduce Plastic Waste"</h3>
          <img
            src="/assets/reduce-plastic.svg"
            alt="Reduce Plastic Waste"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            From reusable bags to stainless steel straws, here are five simple steps you can take to reduce your plastic footprint.
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
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">Article: "The Future of Sustainable Fashion"</h3>
          <img
            src="/assets/sustainable-fashion.svg"
            alt="Sustainable Fashion"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            Discover how brands are innovating with eco-friendly materials and ethical practices to create a more sustainable fashion industry.
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
