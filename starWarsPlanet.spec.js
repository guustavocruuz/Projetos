describe('People API', () => {
    
    
    it('should return status 200', () => {
      const people = cy.request('GET', 'https://swapi.co/api/planets/1')
      
      people.its('status')
        .should('be.eql', 200)
      
    })
  

   it('should return', () => {
    cy.request('GET', 'https://swapi.co/api/planets/1')
      .its('body')
      .then((planet) => {
        expect(planet.name).to.eq('Tatooine')
        expect(planet.rotation_period).to.eq('23')
        expect(planet.orbital_period).to.eq('304')
        expect(planet.diameter).to.eq('10465')
        expect(planet.climate).to.eq('arid')
        expect(planet.gravity).to.eq('1 standard')
        expect(planet.terrain).to.eq('desert')
        expect(planet.surface_water).to.eq('1')
        expect(planet.population).to.eq('200000')      
        
    })
   
    
  })
})