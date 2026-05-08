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
GITHUB_USERNAME=seu-email-ou-usuario
GITHUB_PASSWORD=sua-senha
```

---

## Execução dos testes Cypress

```bash
npx cypress run
```

ou

```bash
npx cypress open
```

## Execução dos testes k6

```bash

```