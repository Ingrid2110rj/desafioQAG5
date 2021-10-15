Funcionalidade: Comprar curso
 A fim de conseguir realizar a compra de um curso
 Como um usuário cadastrado e logado
 Eu quero poder selecionar os produtos, inserir e/ou excluir produtos no carrinho e finalizar a compra
 De modo a poder ter acesso aos cursos adquiridos

  Cenario: Validar resultado de adição de item ao carrinho
  Dado que tenho cadastro válido e estou logado
    Quando seleciono um curso
    E insiro no carrinho
    Entao o item aparece inserido com nome correspondente

  Cenario: Validar resultado de exclusão do único item existente no carrinho
  Dado que tenho cadastro válido, estou logado e possuo apenas 1 item no carrinho
    Quando excluo este item do carrinho
    Entao recebo mensagem "Seu carrinho está vazio"

  Cenario: Realizar compra por boleto
  Dado que tenho cadastro válido e estou logado
    Quando seleciono um curso
    E insiro no carrinho
    E seleciono o boleto como forma de pagamento
    E finalizo a compra
    Entao recebo código do pedido e posso imprimir o boleto para pagamento

  Cenario: Adicionar cupom de desconto inválido
  Dado que tenho cadastro válido e estou logado
    Quando seleciono um curso
    E insiro no carrinho
    E insiro um código de cupom inválido
    Entao recebo mensagem "Cupom "codigo cupom inserido" não encontrado"
  
 