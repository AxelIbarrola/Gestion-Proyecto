class Configuracion {
    constructor() {
        if (!Configuracion.instancia) {
            this.costoFijo = 10;
            Configuracion.instancia = this
        }
        return Configuracion.instancia
    }

    cambiarCosto(nuevoCosto) {
        this.costoFijo = nuevoCosto
    }

    obtenerCostoFijo() {
        return this.costoFijo
    }

}

const instanciaConfiguracion = new Configuracion()

Object.freeze(instanciaConfiguracion)

module.exports = instanciaConfiguracion