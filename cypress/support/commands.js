Cypress.Commands.add('AddProductsTenda', () => {
    cy.get('#searchbarComponent')
      .click()
      .type('Leite Longa Vida Semidesnatado com Tampa Italac 1L', { delay: 50 });
    cy.get('.input-group > div > .btn')
      .click({ force: true })
      .should('be.visible').wait(2000);
      cy.contains('Adicionar').click({force:true}).wait(2000);

  });
  Cypress.Commands.add('AddProductsSeller', () => {
    cy.get('.DepartamentMenuComponent')
      .trigger('mouseover');
    cy.contains('Marketplace').click({ force: true });
  
    cy.get('.title-subcategory')
      .contains('Produtos Seller')
      .should('be.visible')
      .click().wait(2000);
      cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click({force:true});
    
  });

  Cypress.Commands.add('FinalizePurchase', () => {
    cy.get('.cartblock-bottom > [data-cy="btn-"]')
      .scrollIntoView()
      .click({ force: true }).wait(1000);
      cy.get('.modal-ads-footer > [data-cy="btn-"]').click({force:true})

      cy.get('.resume-buttons > .btn').scrollIntoView().click({force:true});
      
      
      cy.get('.subtitle-address-option') 
        .click({force:true})
        .wait(500); 
    
     cy.get('.disclaimer-container > .disclaimer').should('be.visible');
     cy.get(':nth-child(2) > .content-header-package-separation > p').click()
     cy.get('[data-cy="btn-"]').click({force:true})

      cy.get('.resume-buttons > .btn').click({force:true});
      cy.contains('Boleto bancário').click({force:true});
      cy.get('.btn-buy').scrollIntoView().click({force:true}).wait(2000);
      cy.get('#modal-checkout-tenda-variation > .modal-dialog > .modal-content > .svgIcon').click({force:true});
      cy.contains('Cartão Tenda').click({force:true});
      cy.get('#number').type('4000000000000010');
      cy.get('#month > .react-select__control > .react-select__value-container')
        .click()
        .type('03{enter}'); 

      cy.get('#year > .react-select__control > .react-select__value-container')
        .click()
        .type('2025{enter}');  

      cy.get('#name').type(' Fabiana Silva');
      cy.get('#cpf').type('968.245.160-40');
      cy.get('#installments > .react-select__control > .react-select__value-container')
        .click()  
        .type('1x sem juros', { delay: 100 });

      cy.get('.react-select__menu').should('be.visible');


      cy.get('.react-select__menu')
        .contains('1x sem juros')  
        .click(); 
      cy.get('.CreditCardComponent > [data-cy="btn-"]').click();

  });
  
