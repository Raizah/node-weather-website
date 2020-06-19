const request = require('postman-request')



const forecast = (location, latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent( longitude + ',' +  latitude )+'.json?access_token=pk.eyJ1IjoibW9udGFuZXIiLCJhIjoiY2thcG05NjdrMGJjeTJwbXM5MzBjdmxxciJ9.8-YQZEM_4RCcPXhnDq536Q&limit=1';

    const url =  'http://api.weatherstack.com/forecast?access_key=d054b06a5ffe22c611e5bb2d5c32fb74&query=' + encodeURIComponent(location);
    
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            // var now, year, month, day, months;
            // now = new Date(Number("/Date(1460008501597)/".replace(/\D/g, '')));
            // month = now.getMonth() + 1;
            // day = now.getDate();
            // year = now.getFullYear();
            // does = "2020-06-18"
            // dateNow = (year + does + month + does + day).toString();
            callback(undefined, 

                // Summary: body.daily.data[0].summary, 
                // Street: body.features[0].text,
                // Location: body.features[0].place_name,
                // location: body.features[0].place_name
              'Observation time @ ' + body.current.observation_time + ', temperature ' + body.current.temperature + ' degrees out' + ', it is currently ' + body.current.weather_descriptions[0] + ', humidity is ' + body.current.humidity + '%' 
            )
            

     
            // console.log('Sunrise: '+ body.forecast.(does.date)
            // console.log('Sunset: '+ body.forecast.dateNow.mintemp);
            // console.log(now);
            // console.log(dateNow);
            // console.log(year + '-' + month + '-'+ day)
            

        }
    })
}

module.exports = forecast