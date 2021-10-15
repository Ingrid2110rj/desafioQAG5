// <reference types="cypress"> />
import Cadastro from '../../page-objects/a_pageCadastro'

describe('Cadastro Estratégia Concursos', () => {

    beforeEach(() => {
        Cadastro.entrarSite()
        Cadastro.acessarCadastro()
               
    })


    it(' Cadastrar com e-mail inválido', () => { 
        Cadastro.cadastrarDadosIniciais('Ingrid Santos','ingrid.com', 'peniel123', 'peniel123')
        Cadastro.validarEmailInvalido()

    })

    it('Cadastrar Senha < 5 caracteres', () => { 
        Cadastro.cadastrarDadosIniciais('Ingrid Santos', 'ingridferreirabrrj@gmail.com', 'pe', 'pe', )
        Cadastro.validarSenhaMenor5()
        
    })

    it('Cadastrar Senha > 5 caracteres', () => { 
        Cadastro.cadastrarDadosIniciais('Ingrid Santos', 'teste.54321@gmail.com', '123456', '123456')
        Cadastro.validarSenhaMaior5()
                
    })
               
        
    it('Cadastrar CPF inválido (com 10 dígitos) ', () => { 
        Cadastro.realizarCadastroCompleto('Alberto Santos','teste53421@gmail.com','peniel123@','peniel123@','1077798206','21101985','21975612533','21555500','206','CASA2')
        Cadastro.validarCPF()

    })

    it('Cadastrar Data de nascimento inválida', () => { 
        Cadastro.realizarCadastroCompleto('AlbertoSantos','teste52341.u@gmail.com','peniel123@','peniel123@','92897082046','2110195','21975612533','21555500','206','CASA2')
        Cadastro.validarNascimento()
            
    })

    it('Realizar cadastro com dados válidos', () => { 
        Cadastro.realizarCadastroCompleto('Alberto Santos Silva','teste51432.z@gmail.com','peniel123@','peniel123@','24238322061','21101985','21975612533','21555500','206','CASA2')
        Cadastro.validarCadastro()       

    })

})
