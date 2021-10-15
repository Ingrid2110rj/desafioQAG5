/// <reference types= "cypress"/>

describe('API Correios', () => {
    it('Buscar por um CEP Válido', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.postmon.com.br/v1/cep/21555490'
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("bairro", "Marechal Hermes")
            expect(response.body).to.have.property("logradouro", "Rua Coruripe")
            expect(response.body).to.have.property("cidade", "Rio de Janeiro")
        
        })
    })

    it('Buscar por um CEP Inexistente', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.postmon.com.br/v1/cep/0000000',
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property("status", 404)
          
        })
    })

    it('Buscar com formato inválido', () => {
        cy.request({
          method: 'GET',
          url: 'https://api.postmon.com.br/v1/cep/casa',
          failOnStatusCode: false
        }).then((response) => {
          cy.log(JSON.stringify(response.body));
          expect(response).to.have.property("status", 404)
                 
        })
      })

      it('Buscar sem inserir Cep', () => {
        cy.request({
          method: 'GET',
          url: 'https://api.postmon.com.br/v1/cep/',
          failOnStatusCode: false
        }).then((response) => {
          cy.log(JSON.stringify(response.body));
          expect(response).to.have.property("status", 404)
          
         
        })
      })

})
