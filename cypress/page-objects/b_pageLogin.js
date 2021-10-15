const el = require('./e_elements').Caminhos

class loginSite {

    acessarIdentificacao() {
        cy.get(el.MinhaConta).click()
    }

    efetuarLogin(email,senha) {
        cy.get(el.CampoEmail).type(email)
        cy.get(el.CampoSenha).type(senha, {log: false})
        cy.get(el.BtnLogin).click()
    }

    validarErroEmailInvalido() {
        cy.get(el.MsnAlerta).contains('Email ou senha inválido')
    }

    validarErroSenhaVazia() {
        cy.get(el.NotificacaoEmail).contains('Campo "senha" não pode ficar vazio.')
    }

    validarErroEmailVazio() {
        cy.get(el.NotificacaoSenha).contains('Este campo é obrigatório.')
    }

    validarLogin() {
        cy.get(el.ValidaNome).contains('Maria Santos')
    }

}

export default new loginSite()