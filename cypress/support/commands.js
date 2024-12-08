Cypress.Commands.add('AdicionarProdutosTenda', () => {
    cy.get('#searchbarComponent')
      .click()
      .type('Leite Longa Vida Semidesnatado com Tampa Italac 1L', { delay: 50 }); // Atraso para simular digitação
    cy.get('.input-group > div > .btn')
      .click({ force: true })
      .should('be.visible').wait(2000); // Verifica se o botão está visível antes de clicar
  });
  Cypress.Commands.add('AdicionarProdutosSeller', () => {
    cy.get('.DepartamentMenuComponent')
      .trigger('mouseover');  // Simula o hover sobre o elemento
    cy.contains('Marketplace').click({ force: true });
  
    cy.get('.title-subcategory')
      .contains('Produtos Seller')
      .should('be.visible') // Espera que o item 'Produtos Seller' esteja visível
      .click();
  
    //cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]')
    //  .click()
     // .should('be.visible');  // Verifica se o botão de compra está visível
  });

  Cypress.Commands.add('Finalizarcompra', () => {
    cy.get('.icon-cart-ball').click();
    cy.get('.resume-buttons > .btn').first()
      .click({ force: true })
      .should('be.visible'); // Verifica se o botão de "Continuar compra" está visível
    cy.get('.modal-ads-footer > [data-cy="btn-"]')
      .scrollIntoView()
      .click({ force: true })
      .should('have.length', 1); // Espera que o botão de ação tenha exatamente 1 elemento
  
    cy.get(':nth-child(1) > .delivery-actions-container > .btn-delivery')
      .click(); // Escolher a forma de pagamento
    cy.get(':nth-child(2) > .card-content > .card-information-component > .content')
      .click()
      .wait(500); // Escolher entrega
    cy.get('.action > .fas')
      .click({ multiple: true })
      .wait(1000); // Escolher endereço
    cy.get('.card-information-component > .content')
      .click()
      .wait(1000); // Escolher data de entrega
  });
  
