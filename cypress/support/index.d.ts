declare namespace Cypress {
  interface Chainable {
    visitaPaginaLogin(): Chainable<void>;
    preencheUsuario(usuario?: string): Chainable<void>;
    preencheSenha(senha?: string): Chainable<void>;
    submeteLogin(): Chainable<void>;
    validaLogin(usuario?: string, urlEsperada?: string): Chainable<void>;
    acessaAbaRepositories(): Chainable<void>;
    selecionaRepositorio(): Chainable<void>;
    acessaPullRequest(): Chainable<void>;
    acessaCriacaoRepositorio(): Chainable<void>;
    insereDadosRepositorio(nomeRepositorio?: string): Chainable<void>;
    validaCriacaoRepositorio(
      usuario?: string,
      nomeRepositorio?: string
    ): Chainable<void>;
    deslogaConta(): Chainable<void>;
    validaLogout(): Chainable<void>;
  }
}
