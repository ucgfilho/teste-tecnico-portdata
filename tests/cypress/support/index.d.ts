/**
 * Declarações de tipos para os Custom Commands do Cypress.
 * Extende a interface `Chainable` do Cypress para habilitar
 * autocompletar e checagem estática de tipos nos testes.
 */
declare namespace Cypress {
  interface Chainable {
    /** Navega para a página de login do GitHub. */
    visitaPaginaLogin(): Chainable<void>;

    /**
     * Preenche o campo de usuário.
     * Se `usuario` não for informado, usa `GITHUB_USERNAME` do ambiente.
     */
    preencheUsuario(usuario?: string): Chainable<void>;

    /**
     * Preenche o campo de senha.
     * Se `senha` não for informada, usa `GITHUB_PASSWORD` do ambiente.
     */
    preencheSenha(senha?: string): Chainable<void>;

    /** Clica no botão de submissão do formulário de login. */
    submeteLogin(): Chainable<void>;

    /**
     * Valida que o login foi realizado com sucesso.
     * @param usuario - Nome do usuário esperado (opcional; usa env se omitido).
     * @param urlEsperada - Fragmento de URL esperado após login (padrão: "/").
     */
    validaLogin(usuario?: string, urlEsperada?: string): Chainable<void>;

    /** Acessa a aba "Repositories" no perfil do usuário. */
    acessaAbaRepositories(): Chainable<void>;

    /** Seleciona o primeiro repositório listado. */
    selecionaRepositorio(): Chainable<void>;

    /** Acessa a aba "Pull requests" do repositório selecionado. */
    acessaPullRequest(): Chainable<void>;

    /** Navega até a tela de criação de novo repositório via menu "+". */
    acessaCriacaoRepositorio(): Chainable<void>;

    /**
     * Preenche o formulário e confirma a criação do repositório.
     * @param nomeRepositorio - Nome do repositório (padrão: valor do fixture).
     */
    insereDadosRepositorio(nomeRepositorio?: string): Chainable<void>;

    /**
     * Valida que o repositório foi criado e a URL está correta.
     * @param usuario - Nome do usuário (opcional; usa env se omitido).
     * @param nomeRepositorio - Nome do repositório (padrão: valor do fixture).
     */
    validaCriacaoRepositorio(
      usuario?: string,
      nomeRepositorio?: string
    ): Chainable<void>;

    /** Realiza o logout clicando em "Sign out from all accounts". */
    deslogaConta(): Chainable<void>;

    /** Valida que o logout foi concluído verificando a landing page. */
    validaLogout(): Chainable<void>;
  }
}
