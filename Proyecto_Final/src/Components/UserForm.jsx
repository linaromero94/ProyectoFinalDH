import React, { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('common');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario a un servidor o hacer cualquier otra acción necesaria
    console.log({
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      userType,
    });
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Tipo de usuario:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="common">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UserForm;
