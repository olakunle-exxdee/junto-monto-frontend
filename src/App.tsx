import './App.css';
import Wrapper from './components/Wrapper';
import { Routes, Route } from 'react-router-dom';

import ContactDetails from './components/ContactDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Wrapper />} />
        <Route path='/:id' element={<ContactDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
