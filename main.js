const proyecto = require('./proyecto');
const { Tarea, TareaCompuesta } = require('./tarea');
const { minima, media, maxima } = require('./complejidad')

const t1 = new Tarea("1", 3, minima);

const t2 = new TareaCompuesta("2", 5, [
new Tarea("2.1", 6, media),
new TareaCompuesta("2.2", 8, [new Tarea("2.2.1", 3, media), 
new Tarea("2.2.2", 4, minima)], maxima),
], maxima);


const t3 = new TareaCompuesta("3", 7, [
new Tarea("3.1", 6, media),
new Tarea("3.2", 3, maxima),
], minima);

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duración Total: ${proyecto.obtenerDuracion()}`);

console.log(`Costo Total: ${proyecto.obtenerCosto()}`)