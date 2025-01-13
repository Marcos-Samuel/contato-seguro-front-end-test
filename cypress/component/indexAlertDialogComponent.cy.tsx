import React from 'react';
import AlertDialogComponent from '../../src/components/AlertDialog/index';
import { useMountWithProviders } from '../support/hooks';

describe('AlertDialogComponent', () => {
  it('deve renderizar o botão de exclusão e abrir o modal ao clicar', () => {
    const mockOnClick = cy.stub();
    useMountWithProviders(
      <AlertDialogComponent
        message="Você tem certeza que deseja excluir?"
        onClick={mockOnClick}
        id="1"
      />
    );

    cy.get('button').find('svg').should('be.visible', { timeout: 8000 });

    cy.get('button').find('svg').click();

    cy.get('div').contains('Deletar').should('be.visible');
    cy.get('div')
      .contains('Você tem certeza que deseja excluir?')
      .should('be.visible');
  });

  it('deve chamar onClick com o ID correto ao confirmar', () => {
    const mockOnClick = cy.stub();
    useMountWithProviders(
      <AlertDialogComponent
        message="Você tem certeza que deseja excluir?"
        onClick={mockOnClick}
        id="1"
      />
    );

    cy.get('button').find('svg').click();
    cy.get('button').contains('Confirmar').click();
    cy.wrap(mockOnClick).should('have.been.calledWith', '1');
  });

  it('deve fechar o modal ao clicar em "Cancelar"', () => {
    const mockOnClick = cy.stub();
    useMountWithProviders(
      <AlertDialogComponent
        message="Você tem certeza que deseja excluir?"
        onClick={mockOnClick}
        id="1"
      />
    );

    cy.get('button').find('svg').click();
    cy.get('button').contains('Cancelar').click();
    cy.get('div').contains('Deletar').should('not.exist');
  });
});
