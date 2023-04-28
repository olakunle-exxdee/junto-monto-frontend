import { useEffect, useState } from 'react';
import useData from '../services/useData';
import ContactCards from './ContactCards';
import FilterSiderBar from './SideBar';
import { Root } from '../vite-env';

function Wrapper() {
  const [data, loading, error] = useData();
  const [people, setPeople] = useState<Root[] | []>([]);
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [stateData, setStateData] = useState<Root[] | []>([]);
  const [genderData, setGenderData] = useState<Root[] | []>([]);

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
    const filterDatagender = gender
      ? data.filter((item: Root) => item.gender === gender)
      : data;
    const filterDataState = state
      ? data.filter((item: Root) => item.location.state === state)
      : data;
    if (gender) {
      setPeople(filterDatagender);
    }
    if (state) {
      setPeople(filterDataState);
    } else {
      setPeople(data);
    }
  }, [data, state, gender]);

  // const filterData = gender
  //   ? data.filter((item: Root) => item.gender === gender)
  //   : data;

  const onSelectState = (name: string) => {
    setState(name);
  };
  const onSelectGender = (name: string) => {
    setGender(name);
  };

  if (error) return <h1>Something went wrong</h1>;
  if (loading) return <h1>Loading.....</h1>;
  return (
    <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
      <FilterSiderBar filterByState={onSelectState} />
      <ContactCards data={people} filterByGender={onSelectGender} />
    </div>
  );
}

export default Wrapper;
