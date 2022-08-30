const archivoTareas = require("./funciones/funcionesDeTareas");

let accion = process.argv[2];
let data = process.argv[3];

switch (accion) {
  case "listar":
    let lista = archivoTareas.leerArchivo();
    console.log("Listado de tareas");
    console.log("----------------------------------------");
    lista.forEach((element, index) => {
      console.log(`${index + 1}. ${element.titulo} - ${element.estado}`);
    });
    console.log("----------------------------------------");
    break;
  case "crear":
    console.log(`Tarea ${data} creada con exito.`);
    console.log("----------------------------------------");
    break;
  case "filtrar":
    console.log(`Tareas filtradas por estado: ${data}`);
    console.log("----------------------------------------");
    let filtrado = archivoTareas.filtrarPorEstado(data);
    filtrado.forEach((element, index) => {
      console.log(`${index + 1}. ${element.titulo} - ${element.estado}`);
    });
    console.log("----------------------------------------");
    break;
  case undefined:
    console.log("----------------------------------------");
    console.log("Atención - Tienes que pasar una acción.");
    console.log(
      "Las acciones disponibles son: listar o crear 'titulo de la tarea nueva'"
    );
    console.log("----------------------------------------");
    break;
  default:
    console.log("----------------------------------------");
    console.log("No entiendo qué quieres hacer.");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;
}
