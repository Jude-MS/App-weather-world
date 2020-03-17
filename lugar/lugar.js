const axios = require('axios');

let getLugarLatLng = async ( direccion ) => {

    let encodedUrl = encodeURI(direccion);
    
    const instance = await axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '7768322962msh6fd2eaca8c9b1cdp1bd769jsnd008b89304a8'}
      });
    
    let resp = await  instance.get()
    
    if(resp.data.Results === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng
    }
    
}

module.exports = {
    getLugarLatLng
}
