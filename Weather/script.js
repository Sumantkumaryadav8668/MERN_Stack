const axios = require('axios')
require('dotenv/config')

const getInfo = async ()=>{

    try{
        console.log(process.env.WEATHER_KEY)
        // const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${process.env.WEATHER_KEY}`)
        // console.log(result)
    }
    catch(err){
        console.error(err)
    }
}

getInfo()