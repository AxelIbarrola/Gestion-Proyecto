class Tarea{
    constructor(codigo, duracion, costo, complejidad){
        this.codigo = codigo;
        this.duracion = duracion
    }

    obtenerDuracion(){
        return this.duracion
    }

    obtenerCodigo(){
        return this.codigo
    }

    mostrarTareas(){
        console.log(`Código: ${this.codigo} - Duración: ${this.duracion}`)
    }

    calcularCosto(){

    }

}

class TareaCompuesta{
    constructor(codigo, duracion, tareas = []){
        this.codigo = codigo;
        this.duracion = duracion;
        this.tareas = tareas;
    }

    agregarTarea(...tareas){
        this.tareas.push(...tareas)
    }

    obtenerDuracion(){
        return this.tareas.reduce(
            (acumulador, tarea) => acumulador + tarea.obtenerDuracion()
            ,
            this.duracion
        )
    }

    obtenerCodigo(){
        return this.codigo
    }

    mostrarTareas(){
        console.log(`Código: ${this.codigo} - Duración: ${this.duracion}`)
        this.tareas.forEach( ( tarea ) => tarea.mostrarTareas());
    }

}

module.exports = { Tarea, TareaCompuesta }