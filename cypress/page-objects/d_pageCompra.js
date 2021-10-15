const el = require('./e_elements').Caminhos

class comprarCurso {

    acessarHome() {
        cy.get(el.Menu).click()
        cy.get(el.Home).click()
        
    }

    guardarNomeBuscado(apelido){
        cy.get(el.NomeCursoListaBusca).invoke('text').as(apelido)
    }

    addCursoCarrinho() {
        cy.get(el.ComprarCursoTCU).click()
    }

    excluirCursoCarrinho() {
        cy.get(el.ExcluirCurso).click()
    }

    validarExclusaoCartVazio(){
        cy.get(el.AlertaCompra)
        .should('be.visible')
        .invoke('text').should('contains', 'vazio')
    }


    addCupomDesconto(cupom) {
        cy.get(el.CupomDesconto).type(`${cupom}{enter}`) 
    }

    validarErroCupomInvalido(){
        cy.get(el.AlertaCompra).should('be.visible')
        .invoke('text').should('contain', 'não encontrado')
    }

    selecionarPagamentoBoleto() {
        cy.get(el.BtnFinalizarCompra).click()
        cy.get(el.SeletorBoleto).click()
        cy.get(el.SeletorTermos).click()

    }

    finalizarCompra() {
        cy.get(el.BtnFinalizarPagamento).click()
    }

    validarCompraPorBoleto(){
        cy.get(el.ConfirmacaoCompra)
        .should('be.visible')
        .invoke('text').should('contains', 'pedido')
        cy.get(el.BtnImprimirBoleto).should('be.visible')
    }

}

export default new comprarCurso()