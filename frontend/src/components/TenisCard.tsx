import React from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';

interface Tenis {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

interface TenisCardProps {
  tenis: Tenis;
  onAddToFavorites?: (tenis: Tenis) => void;
  onRemoveFromFavorites?: (id: string) => void;
}

const TenisCard: React.FC<TenisCardProps> = ({ 
  tenis, 
  onAddToFavorites,
  onRemoveFromFavorites
}) => {
  const { nombre, categoria, precio, descripcion, imagenUrl } = tenis;

  return (
    <div className="tenis-card">
      <img src={imagenUrl || 'default.jpg'} alt={nombre} />
      <h3>{nombre}</h3>
      <p>
        <strong style={{ color: 'black' }}>CATEGORIA:</strong> {categoria}
      </p>
      <h4>PRECIO:</h4>
      <ul>
        {Array.isArray(precio) && precio.length > 0 ? (
          precio.map((precioItem, index) => (
            <li key={index} style={{ color: 'white' }}>{precioItem}</li>
          ))
        ) : (
          <li>No hay precios disponibles</li>
        )}
      </ul>
      <h4>DESCRIPCION:</h4>
      <p>{descripcion}</p>
      
      <div className="tenis-card-actions">
        {onAddToFavorites && (
          <button 
            className="btn btn-add-favorites"
            onClick={() => onAddToFavorites(tenis)}
          >
            <FaHeart /> Agregar a Favoritos
          </button>
        )}
        
        {onRemoveFromFavorites && (
          <button 
            className="btn btn-remove-favorites"
            onClick={() => onRemoveFromFavorites(tenis._id)}
          >
            <FaTrash /> Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default TenisCard;