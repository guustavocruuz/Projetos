describe('People API', () => {
    
    
    it('should return status 200', () => {
      const people = cy.request('GET', 'https://swapi.co/api/people/1/')
      
      people.its('status')
        .should('be.eql', 200)
      
    })
  

   it('should return', () => {
    cy.request('GET', 'https://swapi.co/api/people/1')
      .its('body')
      .then((people) => {
        expect(people.name).to.eq('Luke Skywalker')
        expect(people.height).to.eq('172')
        expect(people.mass).to.eq('77')
        expect(people.hair_color).to.eq('blond')
        expect(people.skin_color).to.eq('fair')
        expect(people.eye_color).to.eq('blue')
        expect(people.birth_year).to.eq('19BBY')
        expect(people.gender).to.eq('male')      
        
    })
   
    
  })
})