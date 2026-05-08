describe("Repositório", () => {
  before(() => {
    cy.visitaPaginaLogin();

    cy.preencheUsuario();
    cy.preencheSenha();
    cy.submeteLogin();
  });

  it("Cria novo repositório utilizando XPath", () => {
    cy.acessaAbaRepositories();
    cy.selecionaRepositorio();
    cy.acessaPullRequest();
    cy.acessaCriacaoRepositorio();
    cy.insereDadosRepositorio();

    cy.validaCriacaoRepositorio();
  });
});
