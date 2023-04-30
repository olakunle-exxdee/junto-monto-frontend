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
  // const [stateData, setStateData] = useState<Root[] | []>([]);
  // const [genderData, setGenderData] = useState<Root[] | []>([]);

  // const filterDatas = ({ state, gender }: FilterProps) => {
  //   const statef = state
  //     ? data.filter((item: Root) => item.location.state === state)
  //     : data;
  //   const genderf = gender
  //     ? data.filter((item: Root) => item.gender === gender)
  //     : data;
  //   const result =
  //     state && gender
  //       ? statef.filter((item: Root) => genderf.includes(item))
  //       : statef;

  //   return result;
  // };

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
      ? filterDataState.filter((item: Root) => filterDatagender.includes(item))
      : filterDatagender;
  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };

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
