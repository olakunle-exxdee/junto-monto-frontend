import { render, screen } from '@testing-library/react';
import PeopleWrapper from './PeopleWrapper';
import { MemoryRouter } from 'react-router-dom';

test('', () => {
  render(
    <MemoryRouter>
      <PeopleWrapper />
    </MemoryRouter>
  );
  screen.debug();
});
