const el = require('./e_elements').Caminhos

class cadastrarUsuario {
    entrarSite(){
            
        cy.visit(el.Site) 
    }

    acessarCadastro(){
        cy.get(el.BtnCadastro).click({force: true})

    }

    cadastrarDadosIniciais(
        nome,
        email,
        senha,
        confirmarSenha
    ) {

        cy.get(el.NomeCadastro).type(nome)
        cy.get(el.EmailCadastro).type(email)
        cy.get(el.SenhaCadastro).type(senha)
        cy.get(el.ConfirmarSenha).type(confirmarSenha)
    }

    realizarCadastroCompleto(
        nome,
        email,
        senha,
        confirmarSenha,
        CPF,
        nascimento,
        telefone,
        CEP,
        numeroEndereco,
        complementoEndereco){ 

        cy.get(el.NomeCadastro).type(nome);
        cy.get(el.EmailCadastro).type(email);
        cy.get(el.SenhaCadastro).type(senha)
        cy.get(el.ConfirmarSenha).type(confirmarSenha)
        cy.wait(30000) // tempo para validacao captcha manualmente
        cy.get(el.ConfirmarCadastro).click()
        cy.get(el.CPFCadastro).type(CPF)
        cy.get(el.NascimentoCadastro).type(nascimento)
        cy.get(el.TelefoneCadastro).type(telefone)
        cy.get(el.CEPCadastro).type(CEP)
        cy.get(el.NumeroEndCadastro).type(numeroEndereco)
        cy.get(el.ComplementoEndCadastro).type(complementoEndereco)
        cy.get(el.ConfirmarAlteracao).click()
    
    }

    validarEmailInvalido(){

        cy.get(el.ErroEmail).should('be.visible')

    }   
   
    validarSenhaMenor5(){
  
        cy.get(el.ConfirmarCadastro).click()
        cy.get(el.ErroSenha).should('be.visible')
    
    }

    validarSenhaMaior5(){

        cy.wait(30000) // aguardar resolucao captcha manual
        cy.get(el.ConfirmarCadastro).click()
        cy.get(el.CPFCadastro).should('be.visible')
       
    }

    validarCPF(){
                  
        cy.get(el.ErroCPF).should('be.visible')

    }

 
    validarNascimento(){
    
        cy.get(el.ErroNascimento).should('be.visible')
    }


    validarCadastro(){
        
        cy.get(el.ValidarEMAIL).should('be.visible')

    }

}


export default new cadastrarUsuario();