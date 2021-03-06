// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('Header', () => {
  test('"Logo is a link, that points to the correct target.', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'footer_logo.svg' });
    screen.debug(link);
    // userEvent.click(link);
  });
});
