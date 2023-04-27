import React from 'react';
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

export default function Example() {
  const [state, setState] = React.useState(false);
  return (
    <div className='col-span-1 mt-12 sm:col-span-full md:col-span-1 lg:col-span-1  '>
      <fieldset>
        <legend className='text-base font-semibold leading-6 text-gray-900'>
          FilterBy State
        </legend>
        <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
          {people.map((person) => (
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
                  checked={state}
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  value={person}
                  onClick={(e) => {
                    console.log(e.target);
                    setState(!state);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
