const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent( longitude + ',' +  latitude )+'.json?access_token=pk.eyJ1IjoibW9udGFuZXIiLCJhIjoiY2thcG05NjdrMGJjeTJwbXM5MzBjdmxxciJ9.8-YQZEM_4RCcPXhnDq536Q&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')

            callback(undefined, {

                // Summary: body.daily.data[0].summary, 
                Street: body.features[0].text,
                Location: body.features[0].place_name,
                // location: body.features[0].place_name
            })
            
        }
    })
}

module.exports = forecast