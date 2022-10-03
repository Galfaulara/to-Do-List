const Tarea = require ('./tarea')

class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(
            key=> {
                const tarea = this._listado[key];
                listado.push( tarea );
            }
        )
        return listado 
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id='' ){

        if (this._listado[id]) {
            delete this._listado[id]
        }


    }


    cargarTareasFromArray ( tareas = []){

        tareas.forEach( (tarea) =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc=''){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {

            console.log()
            const cadaTarea = this.listadoArr
            cadaTarea.forEach( (tarea, i)  => {
                const idx = `${i+1}. `.green;
                const estado = tarea.completadoEn? `${tarea.completadoEn}`.green : 'No Completado'.red; 
                
                console.log(`${idx} ${tarea.desc} - ${estado}\n`)
            })




    }

    listadoFiltrado(value = true) {
        console.log()
        const cadaTarea = this.listadoArr.filter((tarea) => tarea.completadoEn == value)

            cadaTarea.forEach( (tarea, i)  => {
                const idx = `${i+1}. `.green;
                const estado = tarea.completadoEn? `${tarea.completadoEn}`.green : 'No Completado'.red; 
                
                console.log(`${idx} ${tarea.desc} - ${estado}\n`)
            })

        }

}


module.exports = Tareas