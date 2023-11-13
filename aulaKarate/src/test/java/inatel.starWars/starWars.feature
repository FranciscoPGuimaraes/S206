Feature: Testando API StarWars

Scenario: Testando Retorno people/1/.
    Given url "https://swapi.dev/api/people/1"
    when method get
    then status 200

Scenario: Testando Retorno people/1/1234.
    Given url "https://swapi.dev/api/people/1"
    when method get
    then status 404