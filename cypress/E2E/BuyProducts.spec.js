/// <reference types="cypress" />
import { login } from '../support/login';
import '../support/commands';

describe('Add a tent product and a seller to the cart, remove from the cart and complete the purchase', () => {
  beforeEach("Access Login Page", () => {
    login();
    cy.clearAllSessionStorage();
    cy.reload().wait(1000);
  });

  it('Buy products', () => {
   cy.AddProductsTenda();
   cy.AddProductsSeller();
   cy.FinalizePurchase();
     
  });

    
 });
