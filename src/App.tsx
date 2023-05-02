import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import ContactDetails from './components/ContactDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Wrapper />} />
        <Route path='/:id' element={<ContactDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
