import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Tenis {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string; // Asegúrate de que este nombre coincida con el JSON
}

const TenisDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tenis, settenis] = useState<Tenis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTenis = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tenis/${id}`);
        settenis(response.data);
      } catch (err) {
        console.error(err); // Para depuración
        setError('Error fetching the tenis. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTenis();
  }, [id]);

  if (loading) {
    return <p>Loading Tenis details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  console.log(tenis); // Para verificar que los datos se están estableciendo correctamente

  return (
    <div className="tenis-details">
      {tenis ? (
        <>
          <h1>{tenis.nombre}</h1>
          <p><strong>Categoria:</strong> {tenis.categoria}</p>
          {tenis.imagenUrl && <img src={tenis.imagenUrl} alt={tenis.nombre} />}
          <h3>Precio:</h3>
          <ul>
            {tenis.precio.map((precio, index) => (
              <li key={index}>{precio}</li>
            ))}
          </ul>
          <h3>Descripcion:</h3>
          <p>{tenis.descripcion}</p>
        </>
      ) : (
        <p>No tenis found</p>
      )}
    </div>
  );
};

export default TenisDetails;