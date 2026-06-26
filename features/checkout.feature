Feature: Validacao de Checkout

Scenario: Validar produtos na tela de pagamento
Given que existe um produto no carrinho
When acessar o checkout
Then o produto deve estar listado corretamente
