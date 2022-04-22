const request = require("request")

const test_weather = (enlem,boylam,callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=&query=' + enlem + ',' + boylam + '&units=m'

        request({url: url,json: true},(error,response)=>{
                if(error){
                    return callback(error,undefined)
                }else{
                    callback(undefined,response.body)
                }
        })
}

module.exports = {
    test_weather : test_weather
}