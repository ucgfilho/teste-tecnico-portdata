# Teste Técnico Analista de Qualidade Jr. — Portdata

## Stack de testes

| Ferramenta  | Finalidade                  |
|-------------|-----------------------------|
| Cypress 15  | Testes E2E (TypeScript)     |
| k6          | Testes de carga / performance |

## Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Copiar `.env.example` para `.env`

```bash
cp .env.example .env
```

### 3. Configurar `.env`

Preencha as suas credenciais de login do GitHub:

```env
GITHUB_USERNAME=seu-usuario
GITHUB_PASSWORD=sua-senha
```

---

## Execução dos testes Cypress

```bash
# Interface gráfica (modo interativo)
npm run cy:open

# Linha de comando (modo headless)
npm run cy:run

# Linha de comando com browser visível
npm run cy:run:headed
```

### Verificação de tipos TypeScript

```bash
npm run ts:check
```

---

## Execução dos testes k6

```bash
npm run k6:run
```

---

## Estrutura do projeto

```
tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.ts          # Teste de login
│   │   ├── logout.cy.ts         # Teste de logout
│   │   └── repository.cy.ts     # Teste de criação de repositório
│   ├── fixtures/
│   │   └── variables.json       # Dados de teste (ex: nome do repositório)
│   └── support/
│       ├── commands.ts          # Custom commands Cypress
│       ├── e2e.ts               # Configuração global dos testes
│       └── index.d.ts           # Tipagens dos custom commands
└── k6/
    ├── config/
    │   └── options.js           # Opções globais de carga
    └── helpers/
        └── utils.js             # Funções utilitárias HTTP
cypress.config.ts                # Configuração principal do Cypress
```
