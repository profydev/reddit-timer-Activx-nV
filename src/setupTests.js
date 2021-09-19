// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);
  });
});
