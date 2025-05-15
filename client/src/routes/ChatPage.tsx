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
    <main className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Room: {roomId}</h2>
      <div className="border border-[var(--mustard-yellow)] rounded-lg p-4 h-72 overflow-y-scroll mb-8 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)]">
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
          className="input"
        />
        <button
          onClick={sendMessage}
          className="button button-primary"
        >
          Send
        </button>
      </div>
    </main>
  );
}