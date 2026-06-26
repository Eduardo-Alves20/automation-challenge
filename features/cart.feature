Feature: Carrinho

Scenario: Adicionar produto ao carrinho
Given que o usuario esta logado
When adicionar um produto ao carrinho
Then o produto deve aparecer no carrinho
