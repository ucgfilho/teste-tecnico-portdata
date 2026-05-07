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

Coloque as suas credenciais de login no .env.
Observação: a conta não deve ter a Autenticação de 2 Fatores (2FA) habilitada.

## Execução de testes no Cypress

```bash
npx cypress open
```
ou

```bash
npx cypress run
```

## Execução de testes no k6

