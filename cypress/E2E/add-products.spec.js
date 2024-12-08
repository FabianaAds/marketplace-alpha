/// <reference types="cypress" />
import { login } from '../support/login';
import '../support/commands';

describe('Adicionar um produto tenda e um seller ao carrinho', () => {
  beforeEach("Access Login Page", () => {
    login();
    cy.clearAllSessionStorage();
    cy.reload().wait(1000);
  });

  it('Adicionar produtos', () => {
   cy.AdicionarProdutosTenda();
   cy.AdicionarProdutosSeller();
   cy.Finalizarcompra();
     
  });

    
 });
