import { Link } from 'react-router-dom';

export default function RoomsPage() {
  const rooms = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech Talk' },
  ];

  return (
    <main className="min-h-screen bg-black text-mustard-yellow p-8">
      <h2 className="text-3xl font-bold mb-6">Chat Rooms</h2>
      <ul className="space-y-4">
        {rooms.map((room) => (
          <li key={room.id}>
            <Link
              to={`/rooms/${room.id}`}
              className="block px-4 py-2 bg-mustard-yellow text-black font-bold rounded hover:bg-yellow-600"
            >
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}