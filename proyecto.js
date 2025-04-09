class Proyecto{
    constructor(){
        this.tareas = []
    }

    agregarTarea(tarea){
        this.tareas.push(tarea)
    }

    obtenerDuracion(){
        return this.tareas.reduce(
            (acumulador, tarea) => acumulador + tarea.obtenerDuracion()
            ,
            0
        )
    }

    obtenerCosto(){
        return this.tareas.reduce(
            (acumulador, tarea) => acumulador + tarea.obtenerCosto()
            ,
            0
        )
    }


    mostrarTareas(){
            this.tareas.forEach(
            (tarea) => tarea.mostrarTareas()
        )
    
    }

    limpiarTareas(){
        this.tareas = []
    }
}

const proyecto = new Proyecto()

module.exports = proyecto