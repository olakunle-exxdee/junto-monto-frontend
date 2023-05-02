import { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import ContactCards from './ContactCards';
import FilterSiderBar from './SideBar';
import { Root } from '../vite-env';
import ErrorPage from './ErrorPage';
import Loader from './Loader';
import Header from './Header';

function Wrapper() {
  const [data, loading, error] = useData();
  const [people, setPeople] = useState<Root[] | []>([]);
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');

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

  const filterDataSearch = search
    ? filterDataBoth.filter((person) => {
        return (
          person.name.first.toLowerCase().includes(search.toLowerCase()) ||
          person.name.last.toLowerCase().includes(search.toLowerCase())
        );
      })
    : filterDataBoth;

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };
  const onSearch = (name: string) => {
    setSearch(name);
  };

  // const filteredData = data.filter((item) => {
  //   const genderMatch = selectedGender === 'All' || item.gender === selectedGender;
  //   const ageMatch = selectedAge === 'All' || item.age.toString() === selectedAge;
  //   const nameMatch = selectedName === 'All' || item.name === selectedName;
  //   return genderMatch && ageMatch && nameMatch;}

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <>
      <Header onSearch={onSearch} />
      <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
        <FilterSiderBar filterByState={onSelectState} />
        <div className='col-span-1 sm:col-span-full md:col-span-3 lg:col-span-3'>
          <ContactCards
            data={filterDataSearch}
            filterByGender={onSelectGender}
          />
        </div>
      </div>
    </>
  );
}

export default Wrapper;
