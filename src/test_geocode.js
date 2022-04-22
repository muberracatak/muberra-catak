const request = require("request")

const test_geocode = (address, callback) => {
    const url_adres = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2FueWFoeWEiLCJhIjoiY2tucTZ2a3ZlMDI4ZzMzbnQzY29wd24wdiJ9.Stz8gEheY66xXHzzQTVZow&limit=1'

    request({url: url_adres,json: true },(error,response)=>{
        if(error)
            callback(error,undefined);
        else
            callback(undefined,response.body)
    })  
}

module.exports = {
    test_geocode : test_geocode
}