// console.log("Hello world JS")

// import { response } from "express";

// import { response } from "express";
/*
fetch('http://puzzle.mead.io/puzzle')
.then((response) => {
    response.json().
    then((data) => {
        console.log(data)
    })
})
*/
/*
fetch('http://localhost:3000/weather?address=cotabato%20city').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    })
})
*/

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherValue = document.querySelector('.weatherValue')
const longitudeValue = document.querySelector('.longitudeValue')
const latitudeValue = document.querySelector('.latitudeValue')
const forecastValue = document.querySelector('.forecastValue');

weatherForm.addEventListener('submit', (e) =>{ // assign parameter in event object in callback funciton as e
   
    e.preventDefault() //prevent browser from refresh or reload
    const place = search.value;
    // console.log(location)
    // console.log(place)

    weatherValue.textContent = 'Loading...'
    forecastValue.textContent = ''
    longitudeValue.textContent = '';
    latitudeValue.textContent = '';

    // 'http://localhost:3000/weather?address='

    fetch('/weather?address=' + place ).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            // console.log(data.error);
            weatherValue.textContent = "Type location";

        } else {
            // console.log(data.location);
            // console.log(data.forecast);
            // console.log(data.longitude);
            // console.log(data.latitude);
            
            weatherValue.textContent = 'Address: ' + data.location
            forecastValue.textContent = data.forecast
            longitudeValue.textContent = 'Longitude = ' + data.longitude
            latitudeValue.textContent = 'Latitude = ' + data.latitude
        }
    })
})
})