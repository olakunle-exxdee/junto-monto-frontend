import ReactPaginate from 'react-paginate';
import '../App.css';
import { Root } from '../vite-env';
import ContactCardsItem from './ContactCardsItem';

import { useState } from 'react';
import CardHeader from './CardHeader';

interface Props {
  data: Root[];
  filterByGender: (name: string) => void;
}
const itemsPerPage = 50;
export default function ContactCards({ data, filterByGender }: Props) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className=''>
      <CardHeader data={currentItems} filterByGender={filterByGender} />
      <ul
        role='list'
        className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'">
        {currentItems.map((person) => (
          <ContactCardsItem key={person.id} person={person} />
        ))}
      </ul>
      <ReactPaginate
        // className='sm:flex sm:flex-1 sm:items-center sm:justify-center isolate inline-flex -space-x-px rounded-md shadow-sm'
        containerClassName='flex items-center justify-between my-6 border border-gray-200 bg-white px-4 py-3 sm:px-6 '
        previousClassName='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        nextClassName='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        activeClassName='z-10 bg-indigo-600 text-white focus-visible:outline px-4 py-2
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600'
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
