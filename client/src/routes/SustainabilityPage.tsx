import { useState } from "react";
import useAuthStore from "../store/auth.store";

export default function SustainabilityPage() {
  const { token } = useAuthStore();
  const [isFormVisible, setFormVisible] = useState(false);

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

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Sustainability</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="card max-w-[56vw] flex-shrink-0">
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
                className="button button-secondary"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(1)}
                className="button button-danger"
              >
                Delete
              </button>
            </div>
          )}
        </section>
        <section className="card max-w-[56vw] flex-shrink-0">
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
                className="button button-secondary"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(2)}
                className="button button-danger"
              >
                Delete
              </button>
            </div>
          )}
        </section>
      </div>
      {token && (
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={toggleFormVisibility}
            className="button button-secondary"
          >
            {isFormVisible ? "Hide Form" : "Create New Piece"}
          </button>
          {isFormVisible && (
            <form onSubmit={handleCreate} className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-center">Create New Piece</h3>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter title"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Content</label>
                <textarea
                  className="input"
                  placeholder="Enter content"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="button button-secondary"
              >
                Create
              </button>
            </form>
          )}
        </div>
      )}
    </main>
  );
}
