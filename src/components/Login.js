import { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={event => setUsername(event.target.value)}
          type='text'
          placeholder='Input username'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Login;
