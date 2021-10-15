///<reference types="cypress"/>

import Login from '../../page-objects/b_pageLogin'

import Navegacao from '../../page-objects/a_pageCadastro'

describe ('Login', () => {
    
    beforeEach(() =>{ 
        Navegacao.entrarSite()
        Login.acessarIdentificacao()
    })

    it ('E-mail inválido e senha válida', () => {
        Login.efetuarLogin('fulano123_x@hotmail.com','123456')  
        Login.validarErroEmailInvalido()

    })

    it ('E-mail inválido e senha inválida', () => {
        Login.efetuarLogin('fulano123_x@hotmail.com','12')
        Login.validarErroEmailInvalido()

    })

    it ('Digitar só e-mail', () => {
        Login.efetuarLogin('fulano123_x@hotmail.com',' ')
        Login.validarErroSenhaVazia()
        
    })

    it ('Digitar só senha' , () => {
        Login.efetuarLogin(' ','123456')
        Login.validarErroEmailVazio() 
    })

    it ('E-mail válido e senha válida', () => {
        Login.efetuarLogin('ms6340069@gmail.com','123456')
        cy.wait(30000) // espera para carregamento da página
        Login.validarLogin()
      
    })

})