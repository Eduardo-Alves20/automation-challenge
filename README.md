# Projeto QA Automacao

## Instalacao

```bash
npm install
```

## Executar Cypress

```bash
npm run cy:open
```

## Executar Headless

```bash
npm run cy:run
```

No PowerShell, se aparecer erro com `--smoke-test`, limpe a variavel `ELECTRON_RUN_AS_NODE` antes de executar:

```powershell
$env:ELECTRON_RUN_AS_NODE=$null; npm run cy:run
```

## Tecnologias

- JavaScript
- Cypress
- Cucumber
- BDD

## Observacao

Os cenarios BDD enviados estao em `features/`. O codigo Cypress enviado por WhatsApp foi materializado em `cypress/e2e/login.cy.js` e `cypress/e2e/api.cy.js`.
