interface Props {
  filterByGender: (name: string) => void;
}
const gendeCategory = ['male', 'female'];
export default function CardHeader({ filterByGender }: Props) {
  return (
    <div className=' flex items-center justify-between border border-gray-200 mb-6 bg-white px-4 py-3 sm:px-6'>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>1</span> to{' '}
            <span className='font-medium'>200</span> of{' '}
            <span className='font-medium'>200</span> results
          </p>
        </div>
      </div>
      <div className='flex'>
        <label
          htmlFor='location'
          className=' content-center block text-md font-medium leading-6 text-gray-900 m-1 mr-4 '>
          Sort:
        </label>
        <select
          id='gender'
          name='gender'
          className=' block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue=''
          onChange={(e) => filterByGender(e.target.value)}>
          <option value=''>Gender</option>
          {gendeCategory.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
