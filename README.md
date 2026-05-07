# Teste Técnico Analista de Qualidade Jr. — Portdata

## Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Copiar .env.example para .env

```bash
cp .env.example .env
```

### 3. Configurar .env

```env
GITHUB_USERNAME=
GITHUB_PASSWORD=
BASE_URL=https://www.github.com
REPO_NAME=portdata-repo-teste
```

## Execução de testes no Cypress

```bash
npx cypress open
```
ou

```bash
npx cypress run
```

## Execução de testes no k6

