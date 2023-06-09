import React, { useState } from 'react';

const InicioSesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length <= 3) {
      setError('El nombre de usuario debe tener más de 3 caracteres');
      return;
    }

    if (password.length < 5) {
      setError('La contraseña debe tener al menos 5 caracteres');
      return;
    }

    // Realizar acciones adicionales para iniciar sesión
    console.log('Inicio de sesión exitoso');
  };

  return (
    <div className='inicio'>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" placeholder="Escribe tu usuario" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" placeholder="Escribe tu contraseña" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className='btnForm'>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default InicioSesion;
