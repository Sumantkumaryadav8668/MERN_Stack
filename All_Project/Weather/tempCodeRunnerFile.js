const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${process.env.WEATHER_KEY}`)
        // console.log(result)