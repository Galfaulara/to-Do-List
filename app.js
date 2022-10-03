require('colors');

const { guardarInfo, leerInfo } = require('./helper/guardarArchivo');
const {inquirerMenu,
     pausa,
     leerInput,
    listadoTarreasBorrar,
    listadoTarreasCheck,
confirmacion} = require('./helper/inquirer');
const Tareas = require('./Models/tareas');


const main = async() =>{
   // console.log('Hola Mundo')
 let opt = '';
 const tareas = new Tareas();

 const tareasInfo = leerInfo();

 if (tareasInfo){
 tareas.cargarTareasFromArray(tareasInfo)
 }



    do  {
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                const desc = await leerInput('Descripción');
                tareas.crearTarea(desc);
                console.log(desc)
            break;
        
            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listadoFiltrado(true);
            break;

            case '4':
                tareas.listadoFiltrado(false);
            break;

            case '5':

            const ids = await listadoTarreasCheck(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            console.log(ids)
            break;

            case '6':
                const id = await listadoTarreasBorrar( tareas.listadoArr );
                if (id !=='0'){

                // Preguntar si estás seguro de borrar
                const isOkay = await confirmacion('Está seguro de borrar esta tarea?')
                if (isOkay) {
                    tareas.borrarTarea(id)
                    console.log('Tarea borrada')
                }
                console.log({isOkay})

                }
                break;

            
        }

        guardarInfo(tareas.listadoArr);

       await pausa();


    } while ( opt !== '0');
 
   

}

main();