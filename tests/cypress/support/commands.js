Cypress.Commands.add("visitaPaginaLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("preencheUsuario", (usuario = Cypress.env("GITHUB_USERNAME")) => {
  cy.get("#login_field").should("be.visible").clear().type(usuario);
});

Cypress.Commands.add("preencheSenha", (senha = Cypress.env("GITHUB_PASSWORD")) => {
  cy.get("#password").should("be.visible").clear().type(senha);
});

Cypress.Commands.add("submeteLogin", () => {
  cy.get('[data-testid="sign-in-btn"], [name="commit"]').click();
});

Cypress.Commands.add("validaLogin", (usuario) => {
  cy.get('[data-testid="top-nav-center"]').should("be.visible");
});
