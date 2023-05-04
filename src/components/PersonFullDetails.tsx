import useData from '../hooks/useData';

import { Link, useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Loader from './Spinner';

export default function ContactDetails() {
  const { id } = useParams();

  const [data, loading, error] = useData();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const person = data.filter((e) => String(e.id) === id);
  console.log(person);

  return (
    <>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='flex  flex-wrap items-center justify-between px-2 py-4  '>
          <div className='sm:px-6'>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Individual Information
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              Personal details
            </p>
          </div>
          <div className=''>
            <img
              className='mx-auto'
              src={person[0]?.picture.large}
              alt={person[0]?.name.last}
            />
          </div>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
          <dl className='grid mb-2 grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Title</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.name.title}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Street</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.location.street}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Email address
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>{person[0]?.email}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>City</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.location.city}
              </dd>
            </div>
          </dl>
          <dl className='grid mt-2 grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Full name</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.name.first} {''} {person[0]?.name.last}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>State</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.location.state}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Age</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {person[0]?.dob.age}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Postcode</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {person[0]?.location.postcode}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className='ml-4 my-8'>
        <Link
          className='bg-indigo-800 px-8 py-4 text-sm font-semibold  text-indigo-100 shadow-sm hover:bg-indigo-700'
          to='/'>
          Home
        </Link>
      </div>
    </>
  );
}
