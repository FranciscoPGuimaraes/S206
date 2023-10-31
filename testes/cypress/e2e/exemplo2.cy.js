/// <reference types="cypress" />

describe('Criando cenario de teste para o site goblasqa', () => {
  it('Registrando usuario', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Francisco')
    cy.get('#Text1').type('Pereira')
    cy.get('#username').type('Xico')
    cy.get('#password').type('SenhaSecreta1!')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Registration successful')
  })

  it('Criando e Logando usuario', () => {
    let info = criarUsuario()

    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('div.ng-scope > :nth-child(2)').should('contain', 'You\'re logged in!!')
  })
})

function criarUsuario() {

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let usuario = "usuario-" + horas + minutos + segundos
  let senha = 'SenhaSecreta1!'
  let usuarioinfo = [usuario, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(usuario)
  cy.get('#Text1').type(usuario)
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain', 'Registration successful')

  return usuarioinfo
}