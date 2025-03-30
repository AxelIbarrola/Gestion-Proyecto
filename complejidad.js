class Complejidad {

    obtenerCostoExtra(duracion){
        return 0
    }

    calcularCosto(duracion, costoFijo) {
        const extra = this.obtenerCostoExtra(duracion);
        const costoSinExtra = duracion * costoFijo
        return costoSinExtra * (1 + extra)
    }
}

class Minima extends Complejidad {
    obtenerCostoExtra(duracion) {
        return 0
    }
}

class Media extends Complejidad {
    obtenerCostoExtra(duracion) {
        return 0.05
    }
}

class Maxima extends Complejidad {
    obtenerCostoExtra(duracion) {
        return duracion <= 10 ? 0.07 : 0.07 + (1000 * (duracion - 10))
    }
}

