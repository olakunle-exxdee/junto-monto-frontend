import './App.css';
import Wrapper from './components/PeopleWrapper';
import { Routes, Route } from 'react-router-dom';
import ContactDetails from './components/PersonFullDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='app font-satoshiReg'>
      <Routes>
        <Route path='/' element={<Wrapper />} />
        <Route path='/:id' element={<ContactDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
