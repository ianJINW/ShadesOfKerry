export default function PortfolioPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Portfolio</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">Catwalk Coaching</h3>
          <img
            src="/assets/catwalk-coaching.svg"
            alt="Catwalk Coaching"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">Project: "Runway Ready" - Trained aspiring models for their first fashion show.</p>
          <p className="text-lg">Project: "Confidence on the Catwalk" - A workshop focused on building self-esteem through modeling.</p>
        </section>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform max-w-[56vw] flex-shrink-0">
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
    </main>
  );
}
