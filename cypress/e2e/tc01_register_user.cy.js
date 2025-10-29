describe('TC01 - Register User', () => {
  let testData;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/login"]').click();
  });
  it('Cadastrar um usuário', () => {
    const timeStamp = new Date().getTime();
    const userPassword = testData.validUser.password;
    const userEmail = `test-qa${timeStamp}@test.com`;

    cy.get('input[data-qa="signup-name"]').type('Teste');
    cy.get('input[data-qa="signup-email"]').type(userEmail);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('input[id="id_gender1"]').check();
    cy.get('input[id="name"]').should('have.value', 'Teste');
    cy.get('input[id="password"]').type(userPassword, { log: false });
    cy.get('select[id="days"]').select('10');
    cy.get('select[id="months"]').select('May');
    cy.get('select[id="years"]').select('1990');
    cy.get('input[id="first_name"]').type('Teste');
    cy.get('input[id="last_name"]').type('QA');
    cy.get('input[id="company"]').type('Teste');
    cy.get('input[id="address1"]').type('Rua Teste, 123');
    cy.get('input[id="address2"]').type('Apto 456');
    cy.get('select[id="country"]').select('Canada');
    cy.get('input[id="state"]').type('Estado');
    cy.get('input[id="city"]').type('Cidade');
    cy.get('input[id="zipcode"]').type('12345');
    cy.get('input[id="mobile_number"]').type('1234567890');
    cy.get('button[data-qa="create-account"]').click();
    cy.url().should('include', '/account_created');
    cy.contains('b', 'Account Created!');

    cy.writeFile('cypress/fixtures/registeredUser.json', {
      email: userEmail,
      password: userPassword,
      name: 'Teste QA'
    });
  });
});