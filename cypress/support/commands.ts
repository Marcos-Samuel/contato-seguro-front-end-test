/// <reference types="cypress" />

import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';
import React from 'react';
import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', (jsx, options) =>
  mount(React.createElement(ThemeProvider, { theme }, jsx), options)
);

Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes('Cannot read properties of undefined') &&
    err.stack &&
    err.stack.includes('styled-components')
  ) {
    return false;
  }
  return true;
});
