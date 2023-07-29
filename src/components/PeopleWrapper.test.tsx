import { render, screen } from '@testing-library/react';
import PeopleWrapper from './PeopleWrapper';
import { MemoryRouter } from 'react-router-dom';

// src/setupTests.js
import { server } from '../mocks/server';
// Establish API mocking before all tests.

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
describe('describe', () => {
  beforeEach(async () => {
    await render(
      <MemoryRouter>
        <PeopleWrapper />
      </MemoryRouter>
    );
  });
  test('test running', async () => {
    const tool = await screen.findAllByText('hello');
    expect(tool).toBeInTheDocument();
  });
});
