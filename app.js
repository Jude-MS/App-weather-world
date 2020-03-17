const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: '',
        demmand: true
        
    }
}).argv;

// argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

let getInfo = async ( direccion ) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.location} es ${temp}`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${coords.location}`)
    }
    
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)

