import ContactCards from './ContactCards';
import FilterSiderBar from './FilterSiderBar';

function Wrapper() {
  return (
    <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
      <FilterSiderBar />
      <ContactCards />
    </div>
  );
}

export default Wrapper;
