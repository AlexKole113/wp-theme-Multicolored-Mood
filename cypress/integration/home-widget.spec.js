describe('Slider tests', ()=>{
    it('Data loading and creating queue',()=>{
        cy.visit('http://localhost:63342/wp-theme-Multicolored-Mood/src/index.html?_ijt=nr7sf0ffc6r5dhb6qomfoai1ti')
        const widgetWebComponent = cy.get('home-widget')

       // widgetWebComponent.setAttribute('data', JSON.stringify( testData1) );
       // widgetWebComponent.setAttribute('data', JSON.stringify( testData2) );

    })

    it('Resize',()=>{
        // Resize test
    })
})
