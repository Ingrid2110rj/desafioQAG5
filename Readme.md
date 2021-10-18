# Desafio QA Start Tech 4

Desafio de automatização de testes proposto no âmbito do programa Start Tech 2021 da Ambevtech.

## Atividades
Para este desafio foram solicitadas as seguintes atividades:

- Criar no mínimo 10 Cenários e no máximo 30
- Utilizar as ferramentas:
    - Editor de Texto ou Excel para criação do cenário(Step)
    - Cypress + Visual Code
    - Jmeter
- Elaborar Relatório de Problemas (Caixa Preta)
- Submeter o projeto pelo GitHub

Tema de escolha livre do cenario de criação 

- Por fim, analisar o projeto submetido por outro grupo, executar e mostrar qual foi o ponto de maior dificuldade e problemas encontrados na execução.

## Prazos

Data inicio 13/10  término 21/10 para entrega do material pelo GitHub ao grupo que irá testar e final dia 25/10, com análise e
testes de outro grupo já executados.

## Entregas solicitadas

- Caderno de testes
- Relatório de Problemas
- Códigos de automatização com Cypress
- Resultados do teste de Performance com Jmeter

# O Projeto desenvolvido

## Site escolhido

Foi escolhido o site do curso Estratégia: [EstrategiaConcursos](https://estrategiaconcursos.com.br)

## Etapas do Projeto

1 - Levantamento de funcionalidades e priorização

Foi realizado um levantamento das principais funcionalidades existentes no site, com posterior priorização por criticidade, 
probabilidade, risco e prioridade. Esta priorização encontra-se apresentada no arquivo excel de mesmo nome. 

Com base nestes resultados foram levantados alguns casos de teste para cada funcionalidade considerada mais importante.
Todas foram identificadas como passíveis de serem automatizadas. 
Ao todo 4 funcionalidades foram consideradas para o projeto, configurando um total de 20 casos de testes.

2 - Criação do Caderno de Testes e scrips de Automatização com Page Objects e Hooks

Cada uma das integrantes do Grupo ficou responsável por 1 das funcionalidades, contemplando todos os casos de testes
correspondente, devendo elaborar tanto o Caderno de Teste, quanto o script de Automatização da funcionalidade em questão.

Os cadernos de testes, bem como as automatizações, foram elaborados com base na jornada do usuário, que foi criada para cada funcionalidade por sua respectiva responsável. Tal jornada foi elaborada em linguagem Gherkin e encontram-se na pasta Cenários, arquivos .feature. Destaca-se que não houve incidentes, portanto não foi elaborado um relatório específico, estando a situação de cada caso de teste indicada no próprio caderno de teste. Inclusive, as evidências do funcionamento dos testes podem ser observadas nos vídeos listados a seguir:

- [testeComprarCurso](https://youtu.be/Ju4xk4puys8)
- [testeBuscar](https://www.youtube.com/watch?v=68yaVFPidSk)
- [testeLogin](https://youtu.be/QC1y4ro_-LY)
- [testeCadastro](https://www.youtube.com/watch?v=36sPygqzwn0)

Os elementos utilizados, bem como as classes criadas para cada funcionalidade, além dos próprios scripts de teste passaram
por um Code Review, onde todas contribuíram para redução de redundâncias e aprimoramentos.

Ao final o projeto ficou com 4 scripts de teste (pasta testeWEB em cypress>integration), 4 Page Objects e 1 arquivo de elementos (todos na pasta page-objects em cypress), de sorte que alguns métodos pudessem ser aproveitados por mais de um teste. Ainda, o uso do hook beforeEach foi implementado para se alcançar o momento de teste adequado.

Além disso, no arquivo cypress.json foi incluída a instrução "chromeWebSecurity": false, para garantir que algumas travas de segurança não fossem impeditivas aos testes automatizados. Isto ocasionou um comportamento em loop após o login em alguns cenários de teste, principalmente de Compra, mas que não impediu o teste de acontecer.

**Importante** destacar que nos teste de Cadastro é necessário alterar os e-mails indicados a partir do 3o cenário de teste, utilizando e-mails diferentes para cada cenário, pois caso contrário retornará erro de e-mail já cadastrado e o teste não prosseguirá.

**Por fim, por se tratar de um site em produção que requer dados pessoais e de pagamentos, para algumas ações é exigida a solução do recaptcha. Por este motivo foi utilizada a alternativa do comando cy.wait, para que o executor pudesse resolver o recaptcha MANUALMENTE e o teste tivesse continuidade (Os 4 últimos cenarios de teste do Cadastro e o 3o cenário de teste da Compra exigiram esta solução paliativa)**

3 - Teste de Performance com Jmeter

Para o teste de performance, foi feito um teste considerando 10 e 100 usuários executando 1 ação por segundo. 
Os resultados obtidos e a execução encontram-se nos arquivos da pasta TestePerformance.


4 - Teste de API automatizado com Cypress e Postman (Extra)

Tendo em vista um aproveitamento mais completo de tudo que foi aprendido ao longo dos últimos quase 3 meses, o grupo entendeu ser proveitoso aplicar um teste automatizado de API usando o Cypress. 

Para tanto, foi utilizada a url: [APIdocCEP](https://api.postmon.com.br/v1/cep/)

Por meio desta url é possível testar o método HTTP GET e validar se as infomações de endereço resultantes, correspondem com o CEP requisitado.

Este teste encontra-se na pasta testeAPI em cypress>integration.

O Teste de API também foi realizado com a ferramenta Postman e encontra-se na pasta Teste API Correios-Postman.






