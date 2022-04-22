const express = require("express")
const geocode = require("./test_geocode")
const forecast = require("./test_forecast")
var app = express()

const port = process.env.PORT||3000

app.get("/",(req,res)=>{
    res.send("<p> Merhaba hangi sehirin bilgisini ogrenmek istiyorsanız giriniz .. </p>")
})


app.get("/havadurumu/:sehir",(req,res)=>{
    
    geocode.test_geocode(req.params.sehir, (error,data)=>{
        
        if(error){
            return res.send(error)
        }else{
            const enlem = data.features[0].center[1]
            const boylam = data.features[0].center[0]
            return forecast.test_forecast(enlem,boylam,(error,data)=>{
                if(error){
                    return res.send(error)
                }else{
                    const konum = data.location.region
                    const sicaklik = data.current.temperature
                    
                    return res.send({konum,sicaklik})
                   
                }
            })
         
        }

    })
})


app.listen(port, ()=> {
    console.log("Server is running on 3000 port");
})

