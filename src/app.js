////////////////////////////////////////////////////////////
// Express
// webserver
// npm init -y
// npm install express
// express like a Object
//express has two parameters or arguments, 1 is route, 2 is function that run when opening the web
// visit in the url localhost:3000

/*
const express = require('express');
const app = express();

app.get('/', (req, res)=>{

    res.send('Hello express');

});

app.get('/help', (req, res)=>{

    res.send('Help Page');

});

app.get('/about', (req, res)=>{

    res.send('About');

});

app.get('/weather', (req, res)=>{

    res.send('Weather');

});

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});

*/
////////////////////////////////////////////////////
// Serving HTML & JSON
/*
const express = require('express');
const app = express();

app.get('/', (req, res)=>{

    res.send('<h1>Weather</h1>');

});

app.get('/help', (req, res)=>{
    // object it will automatically stringify the object to json & parsed
    // res.send({
    //     name: 'Andrew',
    //     age: 27
    // });

// array of an object
    res.send([{
        name: 'Andrew'
    }, {
        name: 'Sarah'
    }])


});

app.get('/about', (req, res)=>{

    res.send('<h1>About</h1>');

});

app.get('/weather', (req, res)=>{
    

    res.send([{
        latitude: 30,
        longitue: 50
    }, {
        location : 'Cotabato City'
    }]);

    
});

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});
*/

//////////////////////////////////////////////////
// Serving up Static Assets
/*

const path = require('path')
const express = require('express');
const app = express();

// console.log('Directory all the wy to folder' + __dirname);
// console.log('Filename all the way to app.js' + __filename);

// console.log(__filename);
// console.log(path.join(__dirname, '../'))
// console.log(path.join(__dirname, '../..'))
// console.log(path.join(__dirname, '../public/index.html'))

const publicDirectoryPath = path.join(__dirname, '../public')
// console.log(app.use(express.static(publicDirectoryPath)))
app.use(express.static(publicDirectoryPath))


app.get('/', (req, res)=>{

    res.send('<h1>Weather</h1>');

});


app.get('/weather', (req, res)=>{
    

    res.send([{
        latitude: 30,
        longitue: 50
    }, {
        location : 'Cotabato City'
    }]);

    
});

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});

*/

/////////////////////////////////////////
//Serving up CSS, JS, Images, and More
// relative path version <link rel="stylesheet" href="./css/styles.css">
// absolute path  <link rel="stylesheet" href="/css/styles.css"> => to use without css file path
// <img src="./img/beloved.png" alt="" sizes="" srcset="">
//  <script src="./js/app.js"></script>

///////////////////////////////////////////////////
// Dynamic Pages with Templating
// Template Engine
// Rendering Handlebars Templates => dynamic rendering as supposed to static & easily create the codes that can reusable
// npm install hbs --save handlebarjs
// npm i handlebars --save
// npm install ejs --save (The most popular top 3 June 9 2020)
// res.render is allows us to render one of our views, we configured express to use the view engine hbs so with res.render we can render one of our render templates

///////////////////////////////////////////////////////////////
// Customizing the Views Directory 
// const viewsPath = path.join(__dirname, '../templates'); 
// app.set('views', viewsPath);
/*

const hbs = require('hbs');
const path = require('path')
const express = require('express');

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates'); 

// Setup handlebars engine and views location
app.set('views', viewsPath); 
app.set('view engine', 'hbs'); 

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// first argument is the name of the view to render & the second is the object which contains all of the value
app.get('', (req, res) => {

    res.render('index', {    
    title: 'My title',         
    name: 'Andrew Mead'    
}) }) 

app.get('/weather', (req, res)=>{
    res.send([{
        latitude: 30,
        longitue: 50
    }, {
        location : 'Cotabato City'
    }]);

    
});

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});

*/
////////////////////////////////////////////////////////////
// Advanced Templating 
// to run the partials nodemon app.js -e js,hbs
/*
const hbs = require('hbs');
const path = require('path')
const express = require('express');

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // css file path

const viewsPath = path.join(__dirname, '../templates/views'); // hbs file path 

const partialsPath = path.join(__dirname, '../templates/partials'); // partials path

// Setup handlebars engine and views location
app.set('views', viewsPath); 
app.set('view engine', 'hbs'); //hbs file view engine
hbs.registerPartials(partialsPath);

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath)) // css

// first argument is the name of the view to render & the second is the object which contains all of the value
app.get('', (req, res) => {

    res.render('index', {    
    title: 'My title',         
    name: 'Andrew Mead',
    created: 'Montaner Maulana Usop'    
}) }); 

app.get('/about', (req, res) => {

    res.render('about', {    
    title: 'About Page',         
    name: 'About',
    created: 'Montaner Maulana Usop'      
}) }) 

app.get('/help', (req, res) => {

    res.render('help', {    
    title: 'Help Page',         
    name: 'Help',
    created: 'Montaner Maulana Usop'  

}) }) 

app.get('/weather', (req, res)=>{
    res.send([{
        latitude: 30,
        longitue: 50
    }, {
        location : 'Cotabato City'
    }]);

    
});



app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});
*/

////////////////////////////////////////////////////////////
// 404 Pages
// * asterisk wildcards provided by express
// absolute path  <link rel="stylesheet" href="/css/styles.css"> => to use without css file path
/*
const hbs = require('hbs');
const path = require('path')
const express = require('express');

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // css file path

const viewsPath = path.join(__dirname, '../templates/views'); // hbs file path 

const partialsPath = path.join(__dirname, '../templates/partials'); // partials path

// Setup handlebars engine and views location
app.set('views', viewsPath); 
app.set('view engine', 'hbs'); //hbs file view engine
hbs.registerPartials(partialsPath);

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath)) // css

// first argument is the name of the view to render & the second is the object which contains all of the value
app.get('', (req, res) => {

    res.render('index', {    
    title: 'Weather',         
    name: 'Andrew Mead',
    created: 'Montaner Maulana Usop'    
}) }); 

app.get('/about', (req, res) => {

    res.render('about', {    
    title: 'About',         
    name: 'Mhon',
    created: 'Montaner Maulana Usop'      
}) }) 

app.get('/help', (req, res) => {

    res.render('help', {    
    title: 'Help',         
    name: 'Help',
    created: 'Montaner Maulana Usop'  

}) }) 

app.get('/weather', (req, res)=>{
    res.send([{
        latitude: 30,
        longitue: 50
    }, {
        location : 'Cotabato City'
    }]);

    
});

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Article not found'
    })
})

// 404 pages
app.get('*', (req, res)=> {
    // res.send("My 404 page")
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Page not found'

    })
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});
*/

//////////////////////////////////////////////////////////////////////
// Section 8
// Accessing API from Browser (Weather App)
// Query string  http://localhost:3000/products?key=hello&name=Mhon in the URL
// start the node with nodemon app.js -e js,hbs (e is extension list)
/*
const hbs = require('hbs');
const path = require('path')
const express = require('express');
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // css file path

const viewsPath = path.join(__dirname, '../templates/views'); // hbs file path 

const partialsPath = path.join(__dirname, '../templates/partials'); // partials path

// Setup handlebars engine and views location
app.set('views', viewsPath); 
app.set('view engine', 'hbs'); //hbs file view engine
hbs.registerPartials(partialsPath);

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath)) // css

// first argument is the name of the view to render & the second is the object which contains all of the value
app.get('', (req, res) => {

    res.render('index', {    
    title: 'Weather',         
    name: 'Andrew Mead',
    created: 'Montaner Maulana Usop'    
}) }); 

app.get('/about', (req, res) => {

    res.render('about', {    
    title: 'About',         
    name: 'Mhon',
    created: 'Montaner Maulana Usop'      
}) }) 

app.get('/help', (req, res) => {

    res.render('help', {    
    title: 'Help',         
    name: 'Help',
    created: 'Montaner Maulana Usop'  

}) }) 

app.get('/weather', (req, res)=>{
  if(!req.query.address){
      return res.send({
          error: 'No address'
      })
  } 


geocode(req.query.address, (error, {latitude, longitude, location}={})=>{

        if(error){
          return res.send({error})
        } 
        forecast(longitude, latitude, (error, forecastData)=>{
          if(error){
            return res.send({error})
          } 

          res.send({
            address: req.query.address,
            location,
            forecast: forecastData,
            latitude,
            longitude
            
        })
    
        });
      
      });
  



//   const address = req.query.address;
//   res.send({
//       address: req.query.address
      
//   })

    
});

app.get('/products', (req, res)=>{
    if(!req.query.search){ // ! to flip to false
       return res.send({ // return is required to not run the below codes// to romove the error from terminal
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search); // to display http://localhost:3000/products?search=hello&name=Mhon in the URL search query string
    res.send({
        products: []
    })
})


// app.get('/weather', (req, res)=>{
//     res.send([{
//         latitude: 30,
//         longitue: 50
//     }, {
//         location : 'Cotabato City'
//     }]);

    
// });


app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Article not found'
    })
})

// 404 pages
app.get('*', (req, res)=> {
    // res.send("My 404 page")
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Page not found'

    })
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});


*/



////////////////////////////////////////////////////////////////////
// Section 9
// Application Deployment (Weather)
// search in google heroku cli
// https://devcenter.heroku.com/articles/heroku-cli#download-and-install
// download and install heroku, git, github & 
// npm install -g heroku
// heroku login
///////////////////////////////////////////////////
// Git
// version control
// sequence
// git init
// Git status (need to ignore the node_modules, make new file name .gitignore then inside write node_modules/ )
// Git add src/ or Git add . or git add *.*



const hbs = require('hbs');
const path = require('path')
const express = require('express');
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // css file path

const viewsPath = path.join(__dirname, '../templates/views'); // hbs file path 

const partialsPath = path.join(__dirname, '../templates/partials'); // partials path

// Setup handlebars engine and views location
app.set('views', viewsPath); 
app.set('view engine', 'hbs'); //hbs file view engine
hbs.registerPartials(partialsPath);

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath)) // css

// first argument is the name of the view to render & the second is the object which contains all of the value
app.get('', (req, res) => {

    res.render('index', {    
    title: 'Weather',         
    name: 'Andrew Mead',
    created: 'Montaner Maulana Usop'    
}) }); 

app.get('/about', (req, res) => {

    res.render('about', {    
    title: 'About',         
    name: 'Mhon',
    created: 'Montaner Maulana Usop'      
}) }) 

app.get('/help', (req, res) => {

    res.render('help', {    
    title: 'Help',         
    name: 'Help',
    created: 'Montaner Maulana Usop'  

}) }) 

app.get('/weather', (req, res)=>{
  if(!req.query.address){
      return res.send({
          error: 'No address'
      })
  } 


geocode(req.query.address, (error, {latitude, longitude, location}={})=>{

        if(error){
          return res.send({error})
        } 
        forecast(longitude, latitude, (error, forecastData)=>{
          if(error){
            return res.send({error})
          } 

          res.send({
            address: req.query.address,
            location,
            forecast: forecastData,
            latitude,
            longitude
            
        })
    
        });
      
      });
  



//   const address = req.query.address;
//   res.send({
//       address: req.query.address
      
//   })

    
});

app.get('/products', (req, res)=>{
    if(!req.query.search){ // ! to flip to false
       return res.send({ // return is required to not run the below codes// to romove the error from terminal
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search); // to display http://localhost:3000/products?search=hello&name=Mhon in the URL search query string
    res.send({
        products: []
    })
})


// app.get('/weather', (req, res)=>{
//     res.send([{
//         latitude: 30,
//         longitue: 50
//     }, {
//         location : 'Cotabato City'
//     }]);

    
// });


app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Article not found'
    })
})

// 404 pages
app.get('*', (req, res)=> {
    // res.send("My 404 page")
    res.render('404', {
        title: '404',
        name: 'Montaner Maulana',
        errorMessage: 'Page not found'

    })
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});