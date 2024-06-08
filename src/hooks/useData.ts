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
      const response = await fetch('http://localhost:4000/results');

      if (!response.ok) {
        setError('An Error Ocurred');
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);

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
