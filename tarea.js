const config = require("./configuracion_costos")
class Tarea{
    constructor(codigo, duracion, complejidad){
        this.codigo = codigo;
        this.duracion = duracion
        this.complejidad = complejidad
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

    obtetenerCosto(){
        return this.complejidad.calcularCosto(this.duracion, config.costoFijo)
    }

}

class TareaCompuesta{
    constructor(codigo, duracion, tareas = [], complejidad){
        this.codigo = codigo;
        this.duracion = duracion;
        this.tareas = tareas;
        this.complejidad = complejidad
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

    obtenerCosto(){
        return this.tareas.reduce(
            (acumulador, tarea) => acumulador + tarea.obtenerCosto()
            ,
            this.obtenerCosto()
        )
    }

}

module.exports = { Tarea, TareaCompuesta }