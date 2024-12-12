import React, { useState } from 'react';
import axios from 'axios';

const AddTenis: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    descripcion: '',
    imagenUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tenis', formData);
      alert('Tenis Añadido con Exito');
    } catch (error) {
      alert('Error al Añadir Tenis');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
      <input type="text" placeholder="Categoria" onChange={e => setFormData({ ...formData, categoria: e.target.value })} />
      <textarea placeholder="Precio" onChange={e => setFormData({ ...formData, precio: e.target.value })} />
      <textarea placeholder="Descripcion" onChange={e => setFormData({ ...formData, descripcion: e.target.value })} />
      <input type="text" placeholder="Imagen URL" onChange={e => setFormData({ ...formData, imagenUrl: e.target.value })} />
      <button type="submit">Añadir Tenis</button>
    </form>
  );
};

export default AddTenis;