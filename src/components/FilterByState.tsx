import { useState } from 'react';

const people = [
  'santa catarina',
  'roraima',
  'paraná',
  'tocantins',
  'goiás',
  'espírito santo',
  'minas gerais',
  'mato grosso',
  'mato grosso do sul',
  'acre',
  'pará',
  'amapá',
  'distrito federal',
  'rio de janeiro',
  'alagoas',
  'paraíba',
  'pernambuco',
  'bahia',
  'ceará',
  'maranhão',
  'piauí',
  'rio grande do sul',
  'amazonas',
  'rio grande do norte',
  'são paulo',
  'sergipe',
  'rondônia',
];
interface Props {
  filterByState: (name: string) => void;
}

export default function FilterSiderBar({ filterByState }: Props) {
  const [state, setState] = useState('');
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    if (visible >= people.length) {
      return setVisible(5);
    }
    setVisible(visible + 5);
  };

  return (
    <div className='col-span-1 mt-12 sm:col-span-full md:col-span-1 lg:col-span-1  '>
      <fieldset>
        <legend className='text-base font-semibold leading-6 text-gray-900'>
          FilterBy State
        </legend>
        <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
          <button
            onClick={() => {
              filterByState('');
              setState('');
            }}
            className='my-4 cursor-pointer  bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            reset
          </button>

          {people.slice(0, visible).map((person) => (
            <div key={person} className='relative flex items-start py-4'>
              <div className='min-w-0 flex-1 text-sm leading-6'>
                <label
                  htmlFor={person}
                  className='select-none font-medium text-gray-900 capitalize'>
                  {person}
                </label>
              </div>
              <div className='ml-3 flex h-6 items-center'>
                <input
                  id={person}
                  name={person}
                  type='checkbox'
                  checked={state === person}
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  value={person}
                  onChange={(e) => {
                    setState(e.target.value);
                    filterByState(e.target.value);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type='button'
          className='mt-4 cursor-pointer  bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          onClick={() => showMoreItems()}>
          {visible >= people.length ? 'Show Less' : 'Show More'}
        </button>
      </fieldset>
    </div>
  );
}
