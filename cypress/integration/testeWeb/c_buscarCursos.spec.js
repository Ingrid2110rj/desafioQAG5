
/// <reference types="cypress" />

import Busca from '../../page-objects/c_pageBusca'
import Navegacao from '../../page-objects/a_pageCadastro' 

describe('Buscas', () => {

    beforeEach(() => {
        Navegacao.entrarSite()
    })

    it('Buscar e Validar por Concurso', () => {
        Busca.buscarValidarPorConcurso('Cursos Personalizados','Polícia Civil Do Amazonas (PC-AM)','Tribunal de Justiça de São Paulo (TJ-SP)','Tribunal de Justiça de Goiás (TJ-GO)')
    })

    it('Buscar e Validar por Professor', () => {
        Busca.buscarValidarPorProfessor('Abraão Pereira','Guilherme Gasparini','Júlia Branco','Thaysa Vianna','Vicente Camillo','Waleska Alvarenga')

    })

    it('Buscar e Validar por Matéria', () => {
        Busca.buscarValidarPorMateria('Administração','Direito do Consumidor','Econometria','Engenharia Química','Pedagogia','Saneamento Básico','Técnico em Enfermagem')

    })

    it('Buscar e Validar por Região', () => {
        Busca.buscarValidarPorRegiao('Centro-Oeste','Nordeste','Norte','Sudeste','Sul')

    })

    it('Buscar utilizando a barra de pesquisa', () => {
        Busca.buscarUtilizandoBarraPesquisa('Cursos Personalizados')

    })

})