import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div>
      <h1>Frontend - React</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
