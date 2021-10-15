/// <reference types = "cypress" />

import Compra from '../../page-objects/d_pageCompra'
import Navegacao from '../../page-objects/a_pageCadastro'
import Login from '../../page-objects/b_pageLogin'
import Busca from '../../page-objects/c_pageBusca'

const el = require('../../page-objects/e_elements').Caminhos

describe('Testar Comprar Curso', () => {
    beforeEach(() => {
        //entrando e realizando login no site 
        Navegacao.entrarSite()
        Login.acessarIdentificacao()
        Login.efetuarLogin('dcanongia@gmail.com', "12345mudar")

        // recusando as notificacoes e fechando mensagem
        //cy.get(el.Push).click()
        //cy.get(el.Notificacao, {timeout: 6000}).click()

        //buscando por curso do TCU
        Compra.acessarHome()
        Busca.buscarUtilizandoBarraPesquisa('TCU')

        //guardando o nome do curso buscado que sera comprado
        Compra.guardarNomeBuscado('nomeBuscado')

        //adicionando o 1o curso da lista resultado da busca ao carrinho
        Compra.addCursoCarrinho()

    })

    it('Validar resultado de adição de itens ao carrinho', function() {
        //validando se o nome do produto buscado e adicionado ao carrinho é o mesmo que está indicado no carrinho
        cy.get(el.NomeCursoCarrinho).invoke('text').should('contains', this.nomeBuscado)
    })

    it('Validar resultado de exclusão do único item existente no carrinho', () => {
        //excluindo o item
        Compra.excluirCursoCarrinho()

        //validando a exclusão do único item existente no carrinho
        Compra.validarExclusaoCartVazio()

    })

    it('Realizar compra por boleto', ()=>{

        //selecionando o pagamento por boleto
        Compra.selecionarPagamentoBoleto()

        //esperando para usuario marcar o recaptcha
        cy.wait(30000)

        //finalizando a compra
        Compra.finalizarCompra()

        //validando que a compra foi feita por boleto
        Compra.validarCompraPorBoleto()

    })

    it('Adicionar cupom de desconto inválido',  ()=> {
        Compra.addCupomDesconto('CUPOM2021')

        Compra.validarErroCupomInvalido()

    })
})