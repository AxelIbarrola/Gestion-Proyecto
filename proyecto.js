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

    mostrarTareas(){
            this.tareas.forEach(
            (tarea) => tarea.mostrarTareas()
        )
    
    }

    limpiarTareas(){
        this.tareas = []
    }
}

module.exports = Proyecto