const fs = require("fs");

let archivoTareas = {
  archivo: "./tareas.json",
  leerArchivo: function () {
    let tareas = fs.readFileSync(this.archivo, "utf-8");
    return JSON.parse(tareas);
  },
  imprimirArray: function (array) {
    array.forEach((element, index) => {
      console.log(`${index + 1}. ${element.titulo} - ${element.estado}`);
    });
  },
  escribirJSON: function (data) {
    let json = this.leerArchivo();
    json.push({ titulo: data, estado: "pediente" });
    this.guardarTareas(json);
  },
  guardarTareas: function (json) {
    fs.writeFileSync(this.archivo, JSON.stringify(json));
  },
  filtrarPorEstado: function (estado) {
    let json = this.leerArchivo();
    let filtrado = json.filter((item) => {
      return item.estado === estado;
    });
    return filtrado;
  },
};

module.exports = archivoTareas;
