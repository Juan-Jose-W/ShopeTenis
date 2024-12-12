import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      alert('¡Usuario registrado con Exito!');
    } catch (error) {
      alert('¡Error registering user!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" onChange={e => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Contraseña" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Registrar Usuario</button>
    </form>
  );
};

export default RegisterUser;