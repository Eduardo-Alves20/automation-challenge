Feature: Login

Scenario: Realizar login com sucesso
Given que o usuario acessa a pagina de login
When informar email e senha validos
And clicar em Login
Then deve visualizar a pagina inicial logada
