describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.automationexercise.com/login');

    cy.get('[data-qa="login-email"]')
      .type('teste2021@teste.com.br');

    cy.get('[data-qa="login-password"]')
      .type('teste');

    cy.get('[data-qa="login-button"]').click();

    cy.contains('Logged in as')
      .should('be.visible');
  });
});
