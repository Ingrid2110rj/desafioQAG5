Funcionalidade: Cadastro
 A fim de realizar cadastro
 Como um usuário visitante
 Eu quero poder inserir meus dados pessoais 
 De modo que eu possa ter acesso ao cursos
  
  
  Cenario: Cadastrar com e-mail inválido
  Dado que o usuário inseriu um e-mail inválido
    Quando realiza o cadastro na página
    Entao será exibida uma mensagem de erro

  Cenario:Análise de valor limite na senha (<  5 caracteres) 
  Dado que o usuário inseriu uma senha com menos de 5 caracteres
    Quando realiza o cadastro na página
    Entao será exibida uma mensagem de erro
 

  Cenario: Análise de valor limite na senha (> 5 caracteres) 
  Dado que o usuário inseriu uma senha com mais de 5 caracteres
    Quando realiza o cadastro na página
    Entao consigo efetuar o cadastro com sucesso
  
  Cenario: CPF inválido (com 10 dígitos) 
  Dado que o usuário inseriu um CPF inválido
    Quando realiza o cadastro na página
    Entao será exibida uma mensagem de erro

  Cenario: Data de nascimento inválida 
  Dado  que o usuário inseriu uma data de nascimento inválida
    Quando realiza o cadastro na página
    Entao será exibido uma mensagem de erro
       
  Cenario: Dados válidos
  Dado  que o usuário inseriu todos os dados válidos
    Quando realiza o cadastro na página
    Entao será exibido uma mensagem de confirmação de e-mail 
   