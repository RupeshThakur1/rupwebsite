import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic, e.g., validate credentials
    // For simplicity, let's assume successful login if both fields are non-empty
    if (username && password) {
      // If successful, call the onLogin callback from the parent component
      onLogin();
    } else {
      // Handle login failure, show an error message, etc.
      console.error('Login failed');
    }
  };

  return (
    <div className="popup-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
