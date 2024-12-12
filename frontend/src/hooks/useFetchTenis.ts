import { useState, useEffect } from 'react';
import apiClient from '../utils/api';


interface Tenis {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const useFetchTenis = () => {
  const [tenis, setTenis] = useState<Tenis[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTenis = async () => {
      try {
        const response = await apiClient.get('/api/tenis');
        setTenis(response.data);
      } catch (error) {
        console.error('Error fetching tenis:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenis();
  }, []);

  return { tenis, loading };
};

export default useFetchTenis;