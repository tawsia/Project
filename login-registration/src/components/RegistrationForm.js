import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      setError('Username already exists');
    } else {
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      history.push('/dashboard');
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
