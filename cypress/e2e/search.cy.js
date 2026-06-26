describe('Busca', () => {

  it('Buscar produto', () => {

    cy.visit('https://www.automationexercise.com');

    cy.contains('Products').click();

    cy.get('#search_product')
      .type('Tshirt');

    cy.get('#submit_search')
      .click();

    cy.contains('Searched Products')
      .should('be.visible');
  });

});
