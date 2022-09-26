

describe('Planet flight reservation user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.le-systeme-solaire.net/rest/bodies/', {
      fixture: "/mockData.json",
    }) .as("bodies");
    cy.visit('http://localhost:3000/')
  })
  it('should be able to visit the page and find the header', () => {
    cy.get('h1')
    .contains('Angular Distance')
  })
  it('should be able to see button that navigates to the reservation page', () => {
    cy.get('.reservation-button')
    .should('be.visible')
  })

  it.skip('should navigate to the reservation page', () => {
    cy.visit('/reservations')
    .should('be.visible')
  })
  //   it('should navigate to the reservation page', () => {
  //   cy.visit('/reservation-details')
  //   .should('be.visible')
  // })
  it('should have carousel to navigate between landing pages', () => {
    cy.get('[class*=mySwiper]')
    .children()
    .should('be.visible')
  })
  it('should be able to click on the swiper buttons to scan through the landing pages', () => {
    cy.get('[class^=swiper-button-next]')
    .click( {multiple: true} )
  })
  it('should be able to click on a planet and display the name of the destination', () => {
    // cy.visit('/reservations')
    // .should('be.visible')
    
    })
  })

