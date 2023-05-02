import { Link } from 'react-router-dom';

interface Props {
  onSearch: (value: string) => void;
}

export default function Header({ onSearch }: Props) {
  return (
    <header className='bg-indigo-500'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 sm:mr-4'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Juntos</span>
            <img
              className='h-10 w-auto'
              src='https://thumbs2.imgbox.com/33/17/ghTmgWaO_t.jpg'
              alt=''
            />
          </Link>
        </div>

        <div className='flexgap-x-12 mb-2 ml-6'>
          <div>
            <div className='relative mt-2 flex items-center'>
              <input
                type='text'
                name='search'
                id='search'
                placeholder='Search'
                onChange={(e) => onSearch(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
                <kbd className='inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400'>
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
