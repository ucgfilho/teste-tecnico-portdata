describe("Login", () => {
  it("Realiza login com sucesso", () => {
    cy.visitaPaginaLogin();

    cy.preencheUsuario();
    cy.preencheSenha();
    cy.submeteLogin();

    cy.validaLogin();

  });
});
