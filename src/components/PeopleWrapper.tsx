import { useCallback, useEffect, useState } from 'react';
import useData from '../hooks/useData';
import ContactCards from './PeopleList';
import FilterSiderBar from './FilterByState';
import { Root } from '../vite-env';
import ErrorPage from './ErrorPage';
import Loader from './Spinner';
import Header from './Nav';
import Footer from './Footer';
import useDebounce from '../hooks/useDebounce';

function Wrapper() {
  const [data, loading, error] = useData();
  const [people, setPeople] = useState<Root[] | []>([]);
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const { onSearch, debouncedValue } = useDebounce(2000);
  const filterDa = useCallback(
    (
      data: Root[],
      state?: string,
      gender?: string,
      debouncedValue?: string
    ): Root[] => {
      return data.reduce((acc: Root[], person: Root) => {
        if (state && person.location.state !== state) {
          return acc;
        }
        if (gender && person.gender !== gender) {
          return acc;
        }
        if (
          debouncedValue &&
          !(
            person.name.first
              .toLowerCase()
              .includes(debouncedValue.toLowerCase()) ||
            person.name.last
              .toLowerCase()
              .includes(debouncedValue.toLowerCase())
          )
        ) {
          return acc;
        }
        return [...acc, person];
      }, []);
    },
    []
  );

  useEffect(() => {
    const finalData = filterDa(data, state, gender, debouncedValue);

    setPeople(finalData);
  }, [data, filterDa, gender, debouncedValue, state]);

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };
  // const onSearch = (name: string) => {
  //   console.log('name', name);

  //   setSearchValue(name);
  // };

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <>
      <Header onSearch={onSearch} />
      <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
        <FilterSiderBar filterByState={onSelectState} />
        <div className='col-span-1 sm:col-span-full md:col-span-3 lg:col-span-3'>
          <ContactCards data={people} filterByGender={onSelectGender} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wrapper;
