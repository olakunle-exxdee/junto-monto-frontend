import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
interface Props {
  onSearch: (name: string) => void;
}

export default function Header({ onSearch }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-gray-900'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-12 w-auto'
              src='https://thumbs2.imgbox.com/33/17/ghTmgWaO_t.jpg'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 mb-8'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm mt-9 font-semibold leading-6 text-white'>
              {item.name}
            </a>
          ))}
          <div>
            <label
              htmlFor='search'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Quick search
            </label>
            <div className='relative mt-2 flex items-center'>
              <input
                type='text'
                name='search'
                id='search'
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
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://thumbs2.imgbox.com/33/17/ghTmgWaO_t.jpg'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/25'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800'>
                    {item.name}
                  </a>
                ))}

                <div>
                  <label
                    htmlFor='search'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Quick search
                  </label>
                  <div className='relative mt-2 flex items-center'>
                    <input
                      type='text'
                      name='search'
                      id='search'
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
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
