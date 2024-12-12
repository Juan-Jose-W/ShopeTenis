import React from 'react';
import TenisCard from '../components/TenisCard';
import useFetchTenis from '../hooks/useFetchTenis';

const Home: React.FC = () => {
  const { tenis, loading } = useFetchTenis();

  const addToFavorites = (tenis: any) => {
    const storedFavorites = localStorage.getItem('favorites');
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Verificar si la tenis ya está en favoritos
    if (!favorites.some((fav: any) => fav._id === tenis._id)) {
      favorites.push(tenis);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Tenis agregada a favoritos');
    } else {
      alert('Estos Tenis ya están en tus favoritos');
    }
  };

  if (loading) return <p>Cargando Tenis...</p>;

  return (
    <div className="home">
      {tenis.map((tenis) => (
        <TenisCard key={tenis._id} tenis={tenis} onAddToFavorites={addToFavorites} />
      ))}
    </div>
  );
};

export default Home;