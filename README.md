# Automação de Testes E2E - Automation Exercise

## 📌 Objetivo
Automatizar os principais fluxos de um e-commerce ([Automation Exercise](https://automationexercise.com)), garantindo a qualidade da aplicação através de testes end-to-end.

## 🧠 Estratégia de Testes

Os testes foram desenvolvidos com foco nos fluxos mais críticos do sistema:

- Autenticação de usuários (login válido e inválido)
- Navegação e visualização de produtos
- Carrinho de compras (adição e remoção)
- Processo de checkout

## 🧪 Cenários Cobertos

- Login com sucesso
- Login inválido
- Logout
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Finalizar compra
- Validação de produtos

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Mochawesome (relatórios)
- GitHub Actions (CI/CD)

## 🔍 Diferenciais

- Testes automatizados com foco em fluxos críticos de negócio
- Uso de dados dinâmicos com fixtures
- Integração contínua com GitHub Actions
- Geração de relatórios automatizados

## 🚀 Como Executar

```bash
npm install
npx cypress open
