import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

export default function ChatPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const socketRef = useRef<any>();

  useEffect(() => {
    socketRef.current = io('http://localhost:3000', { query: { roomId } });
    socketRef.current.on('message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    socketRef.current.emit('message', input);
    setInput('');
  };

  return (
    <main className="min-h-screen bg-black text-mustard-yellow p-8">
      <h2 className="text-3xl font-bold mb-4">Room: {roomId}</h2>
      <div className="border border-mustard-yellow rounded p-4 h-64 overflow-y-scroll mb-4">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
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
          className="flex-1 px-4 py-2 text-black bg-mustard-yellow border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-mustard-yellow text-black font-bold rounded hover:bg-yellow-600"
        >
          Send
        </button>
      </div>
    </main>
  );
}