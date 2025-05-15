import { Link } from 'react-router-dom';

export default function RoomsPage() {
  const rooms = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech Talk' },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Chat Rooms</h2>
      <ul className="space-y-6 max-w-md mx-auto">
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`} className="button button-primary block text-center">
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}