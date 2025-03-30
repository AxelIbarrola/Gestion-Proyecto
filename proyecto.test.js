const { Tarea, TareaCompuesta } = require("./tarea")
const Proyecto = require("./proyecto")
const config = require("./configuracion_costos")
const { minima, media, maxima } = require("./complejidad")

const proyecto = new Proyecto()

const tarea1 = new Tarea("1", 1, minima)
const tarea2 = new Tarea("2", 2, media)
const tarea3 = new Tarea("3", 11, maxima)

const tarea4 = new TareaCompuesta("4", 4, [tarea1, tarea3], media)
const tarea5 = new TareaCompuesta("5", 5 , [tarea2], maxima)

tarea4.agregarTarea(tarea5)


//console.log(tarea4.obtenerDuracion())

//tarea4.mostrarTareas()

proyecto.agregarTarea(tarea4)

proyecto.mostrarTareas()

// console.log(config.obtenerCostoFijo())
console.log(tarea3.obtetenerCosto())