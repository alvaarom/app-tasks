# app-tasks
Aplicacion para registrar tareas.

Primer aplicacion creada en el curso de "Programacion Web Full Stack" dictado por Digital House.

https://www.digitalhouse.com/ar/landing/aplica-programacion-web-full-stack

Al momento de ejecutar el archivo app.js desde la terminal con Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:

  a. node app.js listar -
     Si se escribe la palabra “listar” después del nombre del archivo, se listan todas las tareas existentes en el archivo tareas.json.
     
  b. node app.js -
     Si NO se escribe ninguna palabra después del nombre del archivo, en la terminal aparece el texto: 
     "Atención - Tienes que pasar una acción."
     
  c. node app.js cualquier texto -
     Si se llegase a pasar cualquier otro texto que no sea la palabra listar, en la terminal aparece el texto: 
     "No entiendo qué quieres hacer."
