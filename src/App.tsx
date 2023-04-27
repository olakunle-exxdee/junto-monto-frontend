import './App.css';
import ContactCards from './components/ContactCards';
import FilterSiderBar from './components/FilterSiderBar';

function App() {
  return (
    <div className='grid grid-cols-1 gap-5 px-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
      <FilterSiderBar />
      <ContactCards />
    </div>
  );
}

export default App;
