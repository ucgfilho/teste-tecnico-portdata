import "./commands";
import "cypress-xpath";

// Suprime erros não capturados do JavaScript da aplicação para
// evitar que exceções externas (ex: do próprio GitHub) interrompam os testes.
Cypress.on("uncaught:exception", () => false);
