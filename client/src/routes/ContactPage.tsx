export default function ContactPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Contact Me</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4">Email</h3>
          <img
            src="/assets/react.svg"
            alt="Email"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            You can reach me at <a href="mailto:kerry@example.com" className="text-yellow-400 underline">kerry@example.com</a>.
          </p>
        </section>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4">Social Media</h3>
          <img
            src="/assets/react.svg"
            alt="Social Media"
            className="mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg">
            Follow me on Instagram: <a href="https://instagram.com/kerry" className="text-yellow-400 underline">@kerry</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
