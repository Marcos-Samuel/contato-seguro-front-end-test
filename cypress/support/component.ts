// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import React from 'react';
import './commands';
import { theme } from '../../src/styles/theme';
import { mount } from 'cypress/react18';
import { ThemeProvider } from 'styled-components';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;

      mountWithTheme(component: React.ReactNode): Chainable<Element>;
    }
  }
}

// Solução inspirada em uma resposta no StackOverflow.
// O código foi adaptado para meu contexto com o ThemeProvider do styled-components.
// Fonte: https://stackoverflow.com/questions/72648883/how-do-i-add-the-styling-of-chakra-ui-into-cypress-component-testing
Cypress.Commands.add('mount', (jsx, options) =>
  mount(React.createElement(ThemeProvider, { theme }, jsx), options)
);
