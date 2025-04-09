// Archivo para asegurar que solo se pueda crear una instancia de la configuración del costo fijo
class Configuracion {
    constructor() {
        if (!Configuracion.instancia) { // comprueba que no exista una instancia de la configuración ya creada
            this.costoFijo = 10;
            Configuracion.instancia = this // asignamos la propiedad instancia
        }
        return Configuracion.instancia
    }

    cambiarCosto(nuevoCosto) { // En caso de querer cambiar el costo fijo se accede a este método
        this.costoFijo = nuevoCosto
    }

    obtenerCostoFijo() {
        return this.costoFijo
    }

}

const instanciaConfiguracion = new Configuracion() // creamos la instancia

Object.freeze(instanciaConfiguracion) // el método Object.freeze() permite que las propiedades existentes no se puedan modificar ni configurar.
                                      // solo se puede configurar el costo fijo a través del método

module.exports = instanciaConfiguracion // exportamos el objeto