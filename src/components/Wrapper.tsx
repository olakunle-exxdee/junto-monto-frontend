import { useCallback, useEffect, useState } from 'react';
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

  const filterDa = useCallback(
    (
      data: Root[],
      state?: string,
      gender?: string,
      search?: string
    ): Root[] => {
      return data.reduce((acc: Root[], person: Root) => {
        if (state && person.location.state !== state) {
          return acc;
        }
        if (gender && person.gender !== gender) {
          return acc;
        }
        if (
          search &&
          !(
            person.name.first.toLowerCase().includes(search.toLowerCase()) ||
            person.name.last.toLowerCase().includes(search.toLowerCase())
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
    const finalData = filterDa(data, state, gender, search);

    setPeople(finalData);
  }, [data, filterDa, gender, search, state]);

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

  // const filterDataSearch =
  //   search && gender && state
  //     ? filterDataBoth.filter((person) => {
  //         return (
  //           person.name.first.toLowerCase().includes(search.toLowerCase()) ||
  //           person.name.last.toLowerCase().includes(search.toLowerCase())
  //         );
  //       })
  //     : search && gender && !state
  //     ? filterDatagender.filter((person) => {
  //         return (
  //           person.name.first.toLowerCase().includes(search.toLowerCase()) ||
  //           person.name.last.toLowerCase().includes(search.toLowerCase())
  //         );
  //       })
  //     : search && !gender && state
  //     ? filterDataState.filter((person) => {
  //         return (
  //           person.name.first.toLowerCase().includes(search.toLowerCase()) ||
  //           person.name.last.toLowerCase().includes(search.toLowerCase())
  //         );
  //       })
  //     : people.filter((person) => {
  //         return (
  //           person.name.first.toLowerCase().includes(search.toLowerCase()) ||
  //           person.name.last.toLowerCase().includes(search.toLowerCase())
  //         );
  //       });

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };
  const onSearch = (name: string) => {
    setSearch(name);
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
