import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

export default function ChatPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const socketRef = useRef<any>();

  useEffect(() => {
    // connect to server
    socketRef.current = io('http://localhost:3000', { query: { roomId } });
    socketRef.current.on('message', (msg: string) => {
      setMessages(prev => [...prev, msg]);
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
    <main>
      <h2>Room: {roomId}</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'scroll' }}>
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </main>
  );
}
