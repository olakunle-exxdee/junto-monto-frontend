import { useState, useEffect } from 'react';
import { Root } from '../vite-env';

const url = 'http://localhost:3003/results';
import.meta.env.MODE === 'production'
  ? 'https://powerful-suit-newt.cyclic.app/results'
  : url;

const useData = () => {
  const [data, setData] = useState<Root[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://powerful-suit-newt.cyclic.app/results'
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error, setData] as const;
};

export default useData;
