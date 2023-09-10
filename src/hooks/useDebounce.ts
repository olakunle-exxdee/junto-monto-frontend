import { useEffect, useState } from 'react';

function useDebounce(delay: number) {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, delay]);

  const onSearch = (name: string) => {
    setSearchValue(name);
  };
  return { onSearch, debouncedValue };
}

export default useDebounce;
