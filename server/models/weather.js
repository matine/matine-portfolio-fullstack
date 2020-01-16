const request = require('request-promise');
require('dotenv').config();

class Weather {
    static retrieveByCity(city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.WEATHER_API_KEY}`,
            json: true
        }).then(res => {
            callback(res);
        }).catch(err => {
            console.log(err);
            callback({ error: 'could not reach openweathermap api'})
        });
    }
}

module.exports = Weather;