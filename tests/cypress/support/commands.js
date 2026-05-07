const { repoNome } = require("../fixtures/variables.json");

Cypress.Commands.add("visitaPaginaLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("preencheUsuario", (usuario) => {
  if (usuario) {
    cy.get("#login_field").should("be.visible").clear().type(usuario);
    return;
  }

  cy.env(["GITHUB_USERNAME"]).then(({ GITHUB_USERNAME }) => {
    cy.get("#login_field").should("be.visible").clear().type(GITHUB_USERNAME);
  });
});

Cypress.Commands.add("preencheSenha", (senha) => {
  if (senha) {
    cy.get("#password").should("be.visible").clear().type(senha);
    return;
  }

  cy.env(["GITHUB_PASSWORD"]).then(({ GITHUB_PASSWORD }) => {
    cy.get("#password").should("be.visible").clear().type(GITHUB_PASSWORD);
  });
});

Cypress.Commands.add("submeteLogin", () => {
  cy.get('[data-testid="sign-in-btn"], [name="commit"]').click();
});

Cypress.Commands.add("validaLogin", (usuario, urlEsperada = "/") => {
  cy.url().should("include", urlEsperada);
  cy.get('[data-testid="github-avatar"]').click();

  if (usuario) {
    cy.contains(usuario).should("exist").should("be.visible");
    return;
  }

  cy.env(["GITHUB_USERNAME"]).then(({ GITHUB_USERNAME }) => {
    cy.contains(GITHUB_USERNAME).should("exist").should("be.visible");
  });
});

Cypress.Commands.add("acessaAbaRepositories", () => {
  cy.get(
    "/html/body/div[1]/div[2]/react-partial[2]/div/header/div/div[3]/div[1]/div[3]/a[3]/svg",
  ).click();
});

Cypress.Commands.add("selecionaRepositorio", () => {
  cy.get('//*[@id="_r_i_-list-view-node-_r_q_"]').click();
});

Cypress.Commands.add("acessaPullRequest", () => {
  cy.get("/html/body/div[1]/div[2]/react-partial[2]/div/header/nav/ul/li[3]/a").click();
});

Cypress.Commands.add("acessaCriacaoRepositorio", () => {
  cy.get('//*[@id="_R_5jpb_"]/span[1]').click();
  cy.get('//*[@id="_r_19_"]').click();
});

Cypress.Commands.add("insereDadosRepositorio", (nomeRepositorio = repoNome) => {
  cy.get('//*[@id="repository-name-input"]').type(nomeRepositorio);
  cy.get("/html/body/div[1]/div[6]/main/react-app/div/form/div[4]/button").click();
});

Cypress.Commands.add("validaCriacaoRepositorio", (usuario, nomeRepositorio = repoNome) => {
  if (usuario) {
    cy.url().should("include", `/${usuario}/${nomeRepositorio}`);
    return;
  }

  cy.env(["GITHUB_USERNAME"]).then(({ GITHUB_USERNAME }) => {
    cy.url().should("include", `/${GITHUB_USERNAME}/${nomeRepositorio}`);
  });
});
