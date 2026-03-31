// cypress/e2e/api/automation_exercise_api.cy.js
//
// Testes de API — automationexercise.com
// Documentação oficial: https://automationexercise.com/api_list

const BASE_URL = 'https://automationexercise.com/api'

// Helper para parsear o body, que pode vir como string JSON
const parseBody = (body) => (typeof body === 'string' ? JSON.parse(body) : body)

// ─────────────────────────────────────────────────────────────────────────────
// API 1 — GET All Products List
// ─────────────────────────────────────────────────────────────────────────────
describe('GET /productsList', () => {
  it('deve retornar a lista completa de produtos com status 200', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/productsList`,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.have.property('responseCode', 200)
      expect(body).to.have.property('products')
      expect(body.products).to.be.an('array').and.have.length.greaterThan(0)

      // Valida a estrutura do primeiro produto
      const product = body.products[0]
      expect(product).to.include.all.keys('id', 'name', 'price', 'brand', 'category')
      expect(product.category).to.include.all.keys('usertype', 'category')
    })
  })

  it('deve retornar 405 ao tentar usar o método POST em /productsList', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/productsList`,
      failOnStatusCode: false,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 405)
      expect(body).to.have.property('message', 'This request method is not supported.')
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// API 5 — POST Search Product
// ─────────────────────────────────────────────────────────────────────────────
describe('POST /searchProduct', () => {
  it('deve retornar produtos ao buscar por "top"', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/searchProduct`,
      form: true,
      body: { search_product: 'top' },
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 200)
      expect(body).to.have.property('products')
      expect(body.products).to.be.an('array').and.have.length.greaterThan(0)

      // Valida que cada produto retornado tem a estrutura correta
      body.products.forEach((product) => {
        expect(product).to.include.all.keys('id', 'name', 'price', 'brand', 'category')
      })
    })
  })

  it('deve retornar 400 ao enviar POST sem o parâmetro search_product', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/searchProduct`,
      failOnStatusCode: false,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 400)
      expect(body).to.have.property(
        'message',
        'Bad request, search_product parameter is missing in POST request.'
      )
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// API 7 — POST Verify Login
// ─────────────────────────────────────────────────────────────────────────────
describe('POST /verifyLogin', () => {
  it('deve retornar 400 ao enviar POST sem email e senha', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/verifyLogin`,
      failOnStatusCode: false,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 400)
      expect(body).to.have.property(
        'message',
        'Bad request, email or password parameter is missing in POST request.'
      )
    })
  })

  it('deve retornar 404 ao verificar login com credenciais inexistentes', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/verifyLogin`,
      form: true,
      body: {
        email: 'usuario_inexistente@teste.com',
        password: 'senhaerrada123',
      },
      failOnStatusCode: false,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 404)
      expect(body).to.have.property('message', 'User not found!')
    })
  })

  it('deve retornar 405 ao tentar verificar login via GET', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/verifyLogin`,
      failOnStatusCode: false,
    }).then((response) => {
      const body = parseBody(response.body)

      expect(body).to.have.property('responseCode', 405)
      expect(body).to.have.property('message', 'This request method is not supported.')
    })
  })
})