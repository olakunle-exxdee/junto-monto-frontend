import { useState, useEffect } from 'react';
import { Root } from '../vite-env';

const useData = () => {
  const [data, setData] = useState<Root[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3003/results`);
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

  console.log(data);

  return [data, loading, error, setData] as const;
};

export default useData;
