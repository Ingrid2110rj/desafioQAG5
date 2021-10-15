const el = require ('./e_elements').Caminhos

class buscarCurso {

    buscarValidarPorConcurso(
        C1,C2,C3,C4
    ){
        
        
        cy.get(el.FiltroPorConcurso).click()
        cy.get(el.TituloPagina).should('contain','Cursos por concurso')

        cy.contains(C1)
        cy.contains(C2)
        cy.contains(C3)
        cy.contains(C4)
        
    }
    buscarValidarPorProfessor(
        P1,P2,P3,P4,P5,P6
    ){
            
   
        cy.get(el.FiltroPorProfessor).click()
        cy.get(el.TituloPagina).should('contain', 'Cursos por professor')
        cy.get(el.SubtituloPagina).should('contain','Todos os professores')

        cy.contains(P1)
        cy.contains(P2)
        cy.contains(P3)
        cy.contains(P4)
        cy.contains(P5)
        cy.contains(P6)
    

    }  

    buscarValidarPorMateria(
        M1,M2,M3,M4,M5,M6,M7
    ){
            
   
        cy.get(el.FiltroPorMateria).click()
        cy.get(el.TituloPagina).should('contain','Cursos por matéria')
        cy.get(el.SubtituloPagina).should('contain','Todas as matérias')

        cy.contains(M1)
        cy.contains(M2)
        cy.contains(M3)
        cy.contains(M4)
        cy.contains(M5)
        cy.contains(M6)
        cy.contains(M7)
    

    }

    buscarValidarPorRegiao(
        R1,R2,R3,R4,R5
    ){
            

        cy.get(el.FiltroPorRegiao).click()
        cy.get(el.TituloPagina).should('contain','Cursos por região')
        cy.get(el.SubtituloPagina).should('contain','Cursos por região')

        cy.contains(R1)
        cy.contains(R2)
        cy.contains(R3)
        cy.contains(R4)
        cy.contains(R5)
        
        
    }

    buscarUtilizandoBarraPesquisa(
        P1
    ){
            

        cy.get(el.BarraBuscar).type(P1)
        cy.get(el.LupaBuscar).click()
        cy.get(el.TituloResultadoBusca).should('contain','Resultado da busca')
        cy.get(el.ResultadosBusca).should('contain',P1)

        //cy.contains('Pacote p/ Carreira Jurídica 2021 (Cursos Regulares)')
        //cy.contains('Pacote para Concursos (Área de TI) - Cursos Regulares - 2022')
        
    }
}
export default new buscarCurso();