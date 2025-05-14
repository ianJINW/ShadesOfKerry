import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

export default function ChatPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3000', { query: { roomId } });
    socketRef.current.on('message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    socketRef.current?.emit('message', input);
    setInput('');
  };

  return (
    <main className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow p-8">
      <h2 className="text-4xl font-bold mb-6">Room: {roomId}</h2>
      <div className="border border-mustard-yellow rounded-lg p-4 h-72 overflow-y-scroll mb-8 bg-gray-700">
        {messages.map((m, i) => (
          <div key={i} className="mb-2 text-sm">
            {m}
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 px-4 py-3 text-black bg-mustard-yellow border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={sendMessage}
          className="px-5 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500"
        >
          Send
        </button>
      </div>
    </main>
  );
}