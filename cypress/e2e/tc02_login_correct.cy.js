describe('TC02 - Login with correct credentials', () => {
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

  it('Fazer login com o usuário cadastrado', () => {
    const emailToUse = registeredUser?.email || testData.validUser.email;
    const passwordToUse = registeredUser?.password || testData.validUser.password;
    cy.get('input[data-qa="login-email"]').type(emailToUse);
    cy.get('input[data-qa="login-password"]').type(passwordToUse, { log: false });
    cy.get('button[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').should('contain', 'Logged in as');
  });
});
