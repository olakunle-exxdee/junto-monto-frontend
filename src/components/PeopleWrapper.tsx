import { useCallback, useEffect, useState } from 'react';
import useData from '../hooks/useData';
import ContactCards from './PeopleList';
import FilterSiderBar from './FilterByState';
import { Root } from '../vite-env';
import ErrorPage from './ErrorPage';
import Loader from './Spinner';
import Header from './Nav';

function Wrapper() {
  const [data, loading, error] = useData();
  const [people, setPeople] = useState<Root[] | []>([]);
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const filterDa = useCallback(
    (
      data: Root[],
      state?: string,
      gender?: string,
      searchValue?: string
    ): Root[] => {
      return data.reduce((acc: Root[], person: Root) => {
        if (state && person.location.state !== state) {
          return acc;
        }
        if (gender && person.gender !== gender) {
          return acc;
        }
        if (
          searchValue &&
          !(
            person.name.first
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            person.name.last.toLowerCase().includes(searchValue.toLowerCase())
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
    const finalData = filterDa(data, state, gender, searchValue);

    setPeople(finalData);
  }, [data, filterDa, gender, searchValue, state]);

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };
  const onSearch = (name: string) => {
    setSearchValue(name);
  };

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
    </>
  );
}

export default Wrapper;
