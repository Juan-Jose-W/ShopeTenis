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
        <strong>Categoria:</strong> {categoria}
      </p>
      <h4>Precio:</h4>
      <ul>
        {precio.map((precio, index) => (
          <li key={index}>{precio}</li>
        ))}
      </ul>
      <h4>Descripcion:</h4>
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