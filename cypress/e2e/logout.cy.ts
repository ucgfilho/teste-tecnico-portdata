describe("Logout", () => {
  before(() => {
    cy.visitaPaginaLogin();

    cy.preencheUsuario();
    cy.preencheSenha();
    cy.submeteLogin();
  });

  it("Desloga conta do usuário", () => {
    cy.deslogaConta();

    cy.validaLogout();
  });
});
