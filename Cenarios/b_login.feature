Funcionalidade: Login
 A fim de realizar o login no site
 Como um Usuario cadastrado
 Eu quero acessar o site e visualizar a página inicial e o nome do usuário
 De modo a acessar os cursos
 
  Cenario: E-mail inválido e senha válida
  Dado um usuário com cadastro já realizado
    Quando inserir um e-mail sem domínio aceitável 
    E senha válida
    Entao retomar a mensagem de erro, pois o e-mail inserido é inválido
  
  Cenario: E-mail inválido e senha inválida
  Dado um usuário com cadastro já realizado
    Quando inserir um e-mail sem domínio aceitável 
    E senha inválida
    Entao retomar a mensagem de erro, pois o e-mail inserido é inválido 
    E senha inválida

  Cenario: Entrar só usando o e-mail
  Dado um usuário com cadastro já realizado
    Quando inserir um e-mail já cadastrado
    E não inserir uma senha
    Entao retomar a mensagem de erro, pois a senha não foi inserida

  Cenario: Entrar só usando a senha 
  Dado um usuário com cadastro já realizado
    Quando inserir uma senha já cadastrada
    E não inserir um email
    Entao retomar a mensagem de erro, pois o e-mail não foi inserido

  Cenario: E-mail válido e senha válida
  Dado um usuário com cadastro já realizado
    Quando inserir um e-mail já cadastrado
    E senha válida
    Entao realizar o login no site
   
 