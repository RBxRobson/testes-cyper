/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input[name="nome-completo"]').type('Gian Souza')
        cy.get('input[name="email"]').type('giansouza@test.com')
        cy.get('input[name="telefone"]').type('11 12345678')
        cy.get('input[name="endereco"]').type('rua candido carneiro jr, bairro centro, barros cassal-RS')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Ensino médio completo')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})