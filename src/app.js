
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