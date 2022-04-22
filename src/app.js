var app = express()
const express = require("express")
const geocode = require("./test_geocode")
const forecast = require("./test_forecast")


const port = process.env.PORT||3000

app.get("/index",(req,res)=>{
    res.send("<h5> Hangi sehirin bilgisini ogrenmek istiyorsanız giriniz .. </h5>")
})
app.get("/weather",(req,res)=>{
    
    geocode.test_geocode(req.params.sehir, (error,data)=>{
        
        if(error){
            return res.send(error)
        }else{
            const latitude = data.features[0].center[1]
            const longitude = data.features[0].center[0]
            return forecast.test_forecast(latitude,longitude,(error,data)=>{
                if(error){
                    return res.send(error)
                }else{
                    const loc = data.location.region
                    const temp = data.current.temperature
                    
                    return res.send({loc,temp})
                   
                }
            })
        }
    })
})


app.listen(port, ()=> {
    console.log(`Sunucu  ${port} numaralı portta çalışmaktadır"`);
})