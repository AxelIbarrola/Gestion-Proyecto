const { Tarea, TareaCompuesta } = require("./tarea")
const Proyecto = require("./proyecto")

const proyecto = new Proyecto()

const tarea1 = new Tarea("1", 1)
const tarea2 = new Tarea("2", 2)
const tarea3 = new Tarea("3", 3)

const tarea4 = new TareaCompuesta("4", 4, [tarea1, tarea3])
const tarea5 = new TareaCompuesta("5", 5 , [tarea2])

tarea4.agregarTarea(tarea5)


//console.log(tarea4.obtenerDuracion())

//tarea4.mostrarTareas()

proyecto.agregarTarea(tarea4)

proyecto.mostrarTareas()