describe('TC03 - Login with incorrect credentials', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/login"]').click();
  });

  it('should show error with incorrect credentials', () => {
    cy.login('wrong@email.com', 'wrongpassword');
    cy.get('[data-qa="login-email"]').should('have.value', 'wrong@email.com');
    cy.get('.login-form p').should('contain', 'Your email or password is incorrect!');
  });
});