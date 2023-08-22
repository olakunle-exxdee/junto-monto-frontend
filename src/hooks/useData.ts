import { useState, useEffect } from 'react';
import { Root } from '../vite-env';
type DataHookReturnType = [
  Root[],
  boolean,
  string | null,
  React.Dispatch<React.SetStateAction<Root[]>>
];
const useData = (): DataHookReturnType => {
  const [data, setData] = useState<Root[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://powerful-suit-newt.cyclic.app/results'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setData(responseData);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error, setData];
};

export default useData;
