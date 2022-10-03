const fs = require('fs');

    
const archivo = './db/data.json'

const guardarInfo = (data) => {

    
    fs.writeFileSync(archivo, JSON.stringify(data))
}

const leerInfo = () =>{

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {enconding: 'utf-8' })
    const data = JSON.parse(info)
    //console.log(data)
    return data
}

module.exports = {
    guardarInfo,
    leerInfo,
}