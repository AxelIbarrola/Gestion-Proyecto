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

    obtenerCosto(){
        return this.complejidad.calcularCosto(this.duracion, config.costoFijo)
    }

    cambiarComplejidadSiguiente() {
        return this.complejidad = this.complejidad.siguiente()
    }

    cambiarComplejidadAnterior(){
        return this.complejidad = this.complejidad.anterior()
    }

}

class TareaCompuesta{
    constructor(codigo, duracion, tareas = [], complejidad){
        this.codigo = codigo;
        this.duracion = duracion;
        this.tareas = tareas;
        this.complejidad = complejidad
        this.costo = this.complejidad.calcularCosto(this.duracion, config.costoFijo)
    }

    agregarTarea(...tareas){
        this.tareas.push(...tareas)
    }

    overhead() {
        return  (this.tareas.length > 3) ? 0.04 : 0
        
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
        const costo =  this.tareas.reduce(
            (acumulador, tarea) => acumulador + tarea.obtenerCosto()
            ,
            this.costo
        )

        const overhead = this.overhead()

        return costo * (1 + overhead)
    }
}

module.exports = { Tarea, TareaCompuesta }