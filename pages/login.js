import { useState } from 'react';
import jwt from 'jsonwebtoken';

// Basic Authentication with jwt ... 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('Your not logged in!');

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then(t => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token);
      setMessage(
        `Hello ${username} and you are ${json.admin ? 'admin' : 'not an admin'}`
      );
    } else {
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <h2>{message}</h2>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Login" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;
