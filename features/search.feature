Feature: Busca de produtos

Scenario: Buscar produto existente
Given que o usuario esta logado
When pesquisar por "Tshirt"
Then deve visualizar os produtos encontrados
