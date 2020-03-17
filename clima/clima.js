const axios = require('axios');

let getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=231004d03dfbe72328639a400d76c0c4&units=metric`);

    return resp.data.main.temp; 
    
}


module.exports = {
    getClima
}
