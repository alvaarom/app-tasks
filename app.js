const archivoTareas = require("./funciones/funcionesDeTareas");

let accion = process.argv[2];
let data = process.argv[3];

switch (accion) {
  case "listar":
    let lista = archivoTareas.leerArchivo();
    console.log("Listado de tareas");
    console.log("----------------------------------------");
    archivoTareas.imprimirArray(lista);
    console.log("----------------------------------------");
    break;
  case "crear":
    archivoTareas.escribirJSON(data);
    console.log(`Tarea ${data} creada con exito.`);
    console.log("----------------------------------------");
    break;
  case "filtrar":
    let filtrado = archivoTareas.filtrarPorEstado(data);
    console.log(`Tareas filtradas por estado: ${data}`);
    console.log("----------------------------------------");
    archivoTareas.imprimirArray(filtrado);
    console.log("----------------------------------------");
    break;
  case undefined:
    console.log("----------------------------------------");
    console.log("Atención - Tienes que pasar una acción.");
    console.log("Las acciones disponibles son:");
    console.log("- listar");
    console.log("- crear 'titulo de la tarea nueva'");
    console.log("- filtrar 'estado' (pendiente/en progreso/terminada)");
    console.log("----------------------------------------");
    break;
  default:
    console.log("----------------------------------------");
    console.log("No entiendo qué quieres hacer.");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;
}
