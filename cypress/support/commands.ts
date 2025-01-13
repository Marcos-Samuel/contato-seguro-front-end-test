/// <reference types="cypress" />

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
