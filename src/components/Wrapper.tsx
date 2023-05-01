import { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import ContactCards from './ContactCards';
import FilterSiderBar from './SideBar';
import { Root } from '../vite-env';
import ErrorPage from './ErrorPage';
import Loader from './Loader';

function Wrapper() {
  const [data, loading, error] = useData();
  const [people, setPeople] = useState<Root[] | []>([]);
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  // const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setPeople(data);
  }, [data]);

  const filterDataState = state
    ? people.filter((item: Root) => item.location.state === state)
    : people;

  const filterDatagender = gender
    ? people.filter((item: Root) => item.gender === gender)
    : filterDataState;

  const filterDataBoth =
    state && gender
      ? filterDataState.filter((person) => filterDatagender.includes(person))
      : filterDatagender;

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };
  // const onSearch = (name: string) => {
  //   setSearchValue(name);
  // };

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
      <FilterSiderBar filterByState={onSelectState} />
      <div className='col-span-1 sm:col-span-full md:col-span-3 lg:col-span-3'>
        <ContactCards data={filterDataBoth} filterByGender={onSelectGender} />
      </div>
    </div>
  );
}

export default Wrapper;
