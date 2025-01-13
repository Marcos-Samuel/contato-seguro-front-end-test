// cypress/support/hooks.js

import { mount } from 'cypress/react18';
import { BookProvider } from '../../src/contexts/BookContext';
import { AuthorProvider } from '../../src/contexts/AuthorContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const useMountWithProviders = (component) => {
  mount(
    <BookProvider>
      <AuthorProvider>
        <Router>
          <ThemeProvider theme={theme}>{component}</ThemeProvider>
        </Router>
      </AuthorProvider>
    </BookProvider>
  );
};
