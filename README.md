# Projeto de Testes Automatizados - Automation Exercise

Este projeto contém testes automatizados para o site [Automation Exercise](https://automationexercise.com/) utilizando Cypress.

## Status dos Testes

📊 **Último Relatório de Execução**:
- **Total de Testes**: 10
- **Passou**: 10
- **Falhou**: 0
- **Pendente**: 0
- **Ignorado**: 0
- **Tempo Total**: 1 minuto e 12 segundos

### Detalhamento por Teste:
1. TC01 - Registrar Usuário (10s)
2. TC02 - Login com email e senha corretos (6s)
3. TC03 - Login com email e senha incorretos (3s)
4. TC04 - Logout de Usuário (11s)
5. TC05 - Registrar Usuário com email existente (3s)
6. TC06 - Formulário de Contato (5s)
7. TC08 - Verificar Produtos e página de detalhes (5s)
8. TC09 - Pesquisar Produto (4s)
9. TC10 - Verificar Inscrição na página inicial (2s)
10. TC15 - Realizar Pedido: Registrar antes do Checkout (18s)

✅ **Todos os testes passaram com sucesso!**

## Pré-requisitos

- Node.js 20.x
- npm (incluído com Node.js)

## Como Começar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd trabalho-automacao-web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Testes

### Localmente

1. Abrir o Cypress Test Runner:
   ```bash
   npm run cypress:open
   ```

2. Executar testes em modo headless:
   ```bash
   npm test
   ```

3. Gerar relatório de testes:
   ```bash
   npm run report
   ```

### Via GitHub Actions

Os testes são executados automaticamente:
- Push para branch main/master
- Pull request para branch main/master

Para ver os resultados dos testes:
1. Acesse a aba Actions no repositório
2. Clique na última execução do workflow
3. Faça download dos artefatos para ver o relatório Mochawesome

## Estrutura do Projeto

```
trabalho-automacao-web/
├── cypress/
│   ├── e2e/           # Arquivos de teste
│   ├── fixtures/      # Dados de teste
│   ├── support/       # Comandos e configurações
│   └── reports/       # Relatórios de teste
├── .github/
│   └── workflows/     # Configuração do GitHub Actions
├── package.json
├── cypress.config.js
└── README.md
```

## Boas Práticas Utilizadas

- Padrão Page Object através de Comandos Customizados do Cypress
- Testes orientados a dados usando fixtures
- Componentes de teste reutilizáveis
- Nomes descritivos para os testes
- Estrutura clara de teste
- Integração com CI/CD
- Relatórios completos