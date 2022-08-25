const archivoTareas = require("./funciones/funcionesDeTareas");

let accion = process.argv[2];

switch (accion) {
  case "listar":
    let lista = archivoTareas.leerArchivo();
    console.log("Listado de tareas");
    console.log("----------------------------------------");
    for (let index = 0; index < lista.length; index++) {
      console.log(
        `${index + 1}. ${lista[index].titulo} - ${lista[index].estado}`
      );
    }
    console.log("----------------------------------------");
    break;
  case undefined:
    console.log("----------------------------------------");
    console.log("Atención - Tienes que pasar una acción.");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;
  default:
    console.log("----------------------------------------");
    console.log("No entiendo qué quieres hacer.");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;
}
