// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

// Command for login
Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

// Command for signup
Cypress.Commands.add('signup', (name, email) => {
  cy.get('[data-qa="signup-name"]').type(name)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
})

// Command to fill signup form
Cypress.Commands.add('fillSignupForm', (userInfo) => {
  cy.get('[data-qa="password"]').type(userInfo.password)
  cy.get('[data-qa="first_name"]').type(userInfo.firstName)
  cy.get('[data-qa="last_name"]').type(userInfo.lastName)
  cy.get('[data-qa="address"]').type(userInfo.address)
  cy.get('[data-qa="state"]').type(userInfo.state)
  cy.get('[data-qa="city"]').type(userInfo.city)
  cy.get('[data-qa="zipcode"]').type(userInfo.zipcode)
  cy.get('[data-qa="mobile_number"]').type(userInfo.mobileNumber)
})

// Command to verify successful registration
Cypress.Commands.add('verifySuccessfulRegistration', () => {
  cy.get('[data-qa="account-created"]').should('be.visible')
  cy.get('[data-qa="continue-button"]').click()
})