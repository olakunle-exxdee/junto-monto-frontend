import { useState, useEffect, useCallback } from 'react';
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
    } catch (error: any | unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // const filterByState = useCallback(
  //   (stateName: string) => {
  //     console.log(stateName, 'statename');

  //     stateName
  //       ? setData(
  //           data.filter((item: Root) => item.location.state === stateName)
  //         )
  //       : setData(data);
  //   },
  //   [data]
  // );

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error] as const;
};

export default useData;
