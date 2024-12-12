import React, { useState, useEffect } from 'react';
import TenisCard from '../components/TenisCard';
import { colors } from '@mui/material';

interface Tenis {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Tenis[]>([]);

  useEffect(() => {
    // Cargar tenis favoritas desde el almacenamiento local
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((tenis) => tenis._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Función de marcador de posición para onAddToFavorites
  const placeholderAddToFavorites = () => {
    // Esta función no hace nada, solo está para cumplir con la prop requerida
    console.log('Add to favorites no implementado en Favorites');
  };

  return (
    <div className="favorites">
      <h1 style={{ color: 'white' }}>Mis Tenis Favoritas</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((tenis) => (
            <div key={tenis._id} className="favorite-item">
              <TenisCard 
                tenis={tenis} 
                onAddToFavorites={placeholderAddToFavorites} 
              />
              <button
                onClick={() => removeFromFavorites(tenis._id)}
                className="btn btn-remove-favorites">
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Aún no hay Tenis favoritas. ¡Empieza a agregar algunos!</p>
      )}
    </div>
  );
};

export default Favorites;