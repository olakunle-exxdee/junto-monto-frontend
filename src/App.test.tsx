import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import ErrorPage from './components/ErrorPage';
// import App from './App';
import ContactDetails from './components/PersonFullDetails';

test('', () => {
  const { debug } = render(
    <MemoryRouter>
      <ContactDetails />
    </MemoryRouter>
  );
  debug();
});
