import { useState } from "react";

export default function PortfolioPage() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for creating a new piece
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Portfolio</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="card max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">Catwalk Coaching</h3>
          <img
            src="/assets/catwalk-coaching.svg"
            alt="Catwalk Coaching"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">Project: "Runway Ready" - Trained aspiring models for their first fashion show.</p>
          <p className="text-lg">Project: "Confidence on the Catwalk" - A workshop focused on building self-esteem through modeling.</p>
        </section>
        <section className="card max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">BDS Coaching</h3>
          <img
            src="/assets/bds-coaching.svg"
            alt="BDS Coaching"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">Project: "Breaking Barriers" - Helped professionals improve their public speaking skills.</p>
          <p className="text-lg">Project: "Leadership in Action" - A program designed to enhance leadership qualities in young professionals.</p>
        </section>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <button
          onClick={toggleFormVisibility}
          className="button button-secondary"
        >
          {isFormVisible ? "Hide Form" : "Add New Project"}
        </button>
        {isFormVisible && (
          <form onSubmit={handleCreate} className="mt-6 w-full max-w-lg bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-center">Add New Project</h3>
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
              <label className="block text-lg font-medium mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                placeholder="Enter description"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add Project
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
