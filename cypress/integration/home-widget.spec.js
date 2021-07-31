describe('Slider tests', ()=>{
    it('Data loading and creating queue',()=>{
        cy.visit('http://localhost:63342/wp-theme-Multicolored-Mood/src/index.html?_ijt=nr7sf0ffc6r5dhb6qomfoai1ti')
        const widgetWebComponent = cy.get('home-widget')

       const testData1 = {"items":[
               {"title":"Ice", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/ice.jpeg"},
               {"title":"fire ", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/fire.jpeg"},
               {"title":"animal", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/animal.jpeg"},
               {"title":"asian girl ", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/asian-girl.jpeg"},
           ],
           "socialLinks":[
               {"url":"#testData1-facebook","name":"facebook"},
               {"url":"#testData1-Instagram","name":"Instagram"},
               {"url":"#testData1-twitter","name":"twitter"}
           ]
       };
       const testData2 = {"items": [
            {"title":"Ice Text", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/ice.jpeg"},
            {"title":"Fire Text ", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/fire.jpeg"},
            {"title":"Animal", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/animal.jpeg"},
            {"title":"Asian", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/asian-girl.jpeg"},
            {"title":"City Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/city.jpeg"},
            {"title":"Dog Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/dog.jpeg"},
            {"title":"Food Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/food.jpeg"},
            {"title":"Girl Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/girl.jpeg"},
            {"title":"Pop Art Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/pop-art.jpeg"},
            {"title":"Test Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/test.jpeg"},
            {"title":"Old PNG Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/widget-1.png"},
            {"title":"Old PNG Slide2", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/widget-2.png"},
            {"title":"Old PNG Slide3", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/widget-3.png"},
            {"title":"PARROT JPG Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/parrot.jpg"},
            {"title":"Car JPG Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/car.jpg"},
            {"title":"Apple JPG Slide", "text": "Shot by @daaaaaavis", "imageUrl": "home-widget/assets/apple.jpg"},
          ],
            "socialLinks":[
            {"url":"http://some-link-to-website1.com/url/test","name":"some website"},
            {"url":"https://crazy-site.com/oath/destination","name":"crazy Site"},
            {"url":"relative/path","name":"relative link"},
            {"url":"#EXTRALink1","name":"extra Link 1"},
            {"url":"#EXTRALink2","name":"extra Link 2"},
            {"url":"#EXTRALink3","name":"extra Link 3"}
         ]
        };

       // widgetWebComponent.setAttribute('data', JSON.stringify( testData1) );
       // widgetWebComponent.setAttribute('data', JSON.stringify( testData2) );

    })

    it('Resize',()=>{
        // Resize test
    })
})
