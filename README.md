# marketplace-alpha  
# Cenários de Testes Automatizados - E-commerce Tenda Atacado

Este documento descreve os cenários de testes automatizados para o e-commerce do Tenda Atacado. O objetivo dos testes é garantir que as funcionalidades críticas do sistema estejam funcionando corretamente. Os testes serão realizados utilizando o Cypress.

## Cenário 1: Adicionar Produtos ao Carrinho

**Objetivo:** Verificar a funcionalidade de adicionar produtos ao carrinho, com a inclusão de um produto Tenda e um produto de um seller.

### Passos:
1. Acesse o ambiente de desenvolvimento do e-commerce.
2. Adicione um produto Tenda ao carrinho.
3. Adicione um produto de um seller ao carrinho.

### Resultado Esperado:
- Ambos os produtos devem ser adicionados ao carrinho corretamente.

---

## Cenário 2: Adicionar e Remover Unidades de Itens no Carrinho

**Objetivo:** Testar a funcionalidade de adicionar e remover unidades de produtos no carrinho.

### Passos:
1. Acesse o carrinho de compras.
2. Aumente a quantidade de um dos produtos adicionados ao carrinho.
3. Reduza a quantidade do outro produto até removê-lo completamente.

### Resultado Esperado:
- As unidades dos produtos no carrinho devem ser atualizadas corretamente, incluindo a remoção de produtos quando a quantidade for zerada.

---

## Cenário 3: Finalização do Carrinho com Pagamento via Cartão de Tenda

**Objetivo:** Verificar a finalização do pedido com pagamento utilizando um cartão Tenda de teste.

### Passos:
1. Acesse o carrinho de compras.
2. Inicie o processo de finalização da compra.
3. Escolha a opção de pagamento com cartão de Tenda.
4. Insira os dados do cartão de teste:
   - Número do Cartão: ``
   - CVV: Qualquer valor
   - Data de Expiração: Qualquer valor
5. Conclua o processo de compra.

### Resultado Esperado:
- O sistema deve processar o pagamento e confirmar a finalização do pedido com o cartão de crédito.


## Cenário 4: Login de Usuário

**Objetivo:** Validar o login de um usuário criado previamente.

### Passos:
1. Acesse a página de login.
2. Insira as credenciais do usuário criado no cenário anterior.
3. Clique no botão "Entrar".

### Resultado Esperado:
- O usuário deve ser autenticado e redirecionado para a página principal ou para a página de perfil.
