import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { Root } from '../vite-env';

const ContactCardsItem = ({ person }: { person: Root }) => {
  return (
    <li
      key={person.id}
      className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
      <div className='flex flex-1 flex-col p-8'>
        <img
          className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
          src={person.picture.large}
          alt={person.name.last}
        />
        <h3 className='mt-6 text-sm font-medium capitalize text-gray-900'>
          {person.name.first} {''} {person.name.last}
        </h3>
        <dl className='mt-1 flex flex-grow flex-col justify-between'>
          <dt className='sr-only'>Title</dt>
          <dd className='text-sm text-gray-500'>{person.location.state}</dd>
          <dt className='sr-only'>Role</dt>
          <dd className='mt-3'>
            <span className='rounded-full bg-green-100 px-2 py-1 text-xs capitalize font-medium text-green-800'>
              {person.gender}
            </span>
          </dd>
        </dl>
        <div className='my-4'>
          <button
            type='button'
            className='rounded-md bg-green-800 px-2.5 py-1.5 text-sm font-semibold  text-green-100 shadow-sm hover:bg-green-700'>
            More Info
          </button>
        </div>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a
              href={`mailto:${person.email}`}
              className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'>
              <EnvelopeIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              Email
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a
              href={`tel:${person.phone}`}
              className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'>
              <PhoneIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              Call
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactCardsItem;
