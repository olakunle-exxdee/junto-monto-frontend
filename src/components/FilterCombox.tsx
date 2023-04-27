export default function Example() {
  return (
    <div className='flex '>
      <label
        htmlFor='location'
        className=' content-center block text-md font-medium leading-6 text-gray-900 m-1 mr-4 '>
        Location:
      </label>
      <select
        id='location'
        name='location'
        className=' block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
        defaultValue='Canada'>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
}
