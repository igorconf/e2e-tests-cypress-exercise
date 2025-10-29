describe('TC05 - Register with existing email', () => {
  let testData;
  let registeredUser;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
    cy.fixture('registeredUser').then((u) => {
      registeredUser = u;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/login"]').click();
  });

  it('Cadastrar um e-mail já cadastrado', () => {
    const emailToUse = registeredUser?.email || testData.validUser.email;
    cy.get('input[data-qa="signup-name"]').type('Teste');
    cy.get('input[data-qa="signup-email"]').type(emailToUse);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!');
  });
});