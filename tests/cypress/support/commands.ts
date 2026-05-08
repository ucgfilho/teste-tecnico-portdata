import variables from "../fixtures/variables.json";

const { repoNome } = variables;

// ---------------------------------------------------------------------------
// Autenticação
// ---------------------------------------------------------------------------

Cypress.Commands.add("visitaPaginaLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("preencheUsuario", (usuario?: string) => {
  if (usuario) {
    cy.get("#login_field").should("be.visible").clear().type(usuario);
    return;
  }

  const githubUsername = Cypress.env("GITHUB_USERNAME") as string;
  cy.get("#login_field").should("be.visible").clear().type(githubUsername);
});

Cypress.Commands.add("preencheSenha", (senha?: string) => {
  if (senha) {
    cy.get("#password").should("be.visible").clear().type(senha);
    return;
  }

  const githubPassword = Cypress.env("GITHUB_PASSWORD") as string;
  cy.get("#password").should("be.visible").clear().type(githubPassword);
});

Cypress.Commands.add("submeteLogin", () => {
  cy.get('[data-testid="sign-in-btn"], [name="commit"]').click();
});

Cypress.Commands.add(
  "validaLogin",
  (usuario?: string, urlEsperada: string = "/") => {
    cy.url().should("include", urlEsperada);
    cy.get('[data-testid="github-avatar"]').click();

    const nomeEsperado = usuario ?? (Cypress.env("GITHUB_USERNAME") as string);
    cy.contains(nomeEsperado).should("exist").should("be.visible");
  }
);

// ---------------------------------------------------------------------------
// Repositório
// ---------------------------------------------------------------------------

Cypress.Commands.add("acessaAbaRepositories", () => {
  cy.get('a[href="/repos"]').click();
  cy.contains("My repositories").click();
});

Cypress.Commands.add("selecionaRepositorio", () => {
  cy.get(".ReposListItem-module__NwoTitle__l7gRA").first().click();
});

Cypress.Commands.add("acessaPullRequest", () => {
  cy.contains("Pull requests").click();
  cy.wait(1000);
});

Cypress.Commands.add("acessaCriacaoRepositorio", () => {
  cy.get("#_R_5jpb_ > .prc-Button-ButtonContent-Iohp5").click();
  cy.xpath('//a[@href="/new"]').click();
});

Cypress.Commands.add(
  "insereDadosRepositorio",
  (nomeRepositorio: string = repoNome) => {
    cy.get("#repository-name-input").clear().type(nomeRepositorio);
    cy.wait(2000);
    cy.contains("button", "Create repository").click();
  }
);

Cypress.Commands.add(
  "validaCriacaoRepositorio",
  (usuario?: string, nomeRepositorio: string = repoNome) => {
    const nomeUsuario = usuario ?? (Cypress.env("GITHUB_USERNAME") as string);
    cy.url().should("include", `/${nomeUsuario}/${nomeRepositorio}`);
  }
);

// ---------------------------------------------------------------------------
// Logout
// ---------------------------------------------------------------------------

Cypress.Commands.add("deslogaConta", () => {
  cy.get('[data-testid="github-avatar"]').click();
  cy.contains("Sign out").click();
  cy.get('input[value="Sign out from all accounts"]').click();
});

Cypress.Commands.add("validaLogout", () => {
  cy.get(".lp-Intro").should("exist").should("be.visible");
});
