const fs = require("fs");

let archivoTareas = {
  archivo: "./tareas.json",
  selector: function (array, callback) {
    return callback(array);
  },
  leerArchivo: function () {
    let tareas = fs.readFileSync(this.archivo, "utf-8");
    return JSON.parse(tareas);
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
