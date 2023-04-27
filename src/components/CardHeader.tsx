import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import FilterCombox from './FilterCombox';

const items = [
  {
    id: 1,
    title: 'Back End Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    id: 2,
    title: 'Front End Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
  },
];

export default function Example() {
  return (
    <div className=' flex items-center justify-between border border-gray-200 mb-6 bg-white px-4 py-3 sm:px-6'>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>1</span> to{' '}
            <span className='font-medium'>10</span> of{' '}
            <span className='font-medium'>97</span> results
          </p>
        </div>
      </div>
      <FilterCombox />
    </div>
  );
}
