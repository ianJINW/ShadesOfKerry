import { Link } from 'react-router-dom';

export default function RoomsPage() {
  // TODO: fetch rooms from backend via Socket.io or REST
  const rooms = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech Talk' },
  ];

  return (
    <main>
      <h2>Chat Rooms</h2>
      <ul>
        {rooms.map(r => (
          <li key={r.id}>
            <Link to={`/rooms/${r.id}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
