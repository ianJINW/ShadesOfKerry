import { Link } from 'react-router-dom';

export default function RoomsPage() {
  const rooms = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech Talk' },
  ];

  return (
    <main className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow p-8">
      <h2 className="text-5xl font-extrabold mb-10">Chat Rooms</h2>
      <ul className="space-y-6">
        {rooms.map((room) => (
          <li key={room.id}>
            <Link
              to={`/rooms/${room.id}`}
              className="block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 shadow-md"
            >
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}