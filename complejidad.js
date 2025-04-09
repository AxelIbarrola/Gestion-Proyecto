class Complejidad {

    obtenerCostoExtra(duracion){
        return 0
    }

    calcularCosto(duracion, costoFijo) { // puede usarse como estándar 
        const extra = this.obtenerCostoExtra(duracion);
        const costoSinExtra = duracion * costoFijo
        return costoSinExtra * (1 + extra)
    }
}

class Minima extends Complejidad {
    obtenerCostoExtra(duracion) {
        return 0
    }

    siguiente() {
        return new Media()
    }

    anterior(){
        return new Maxima()
    }
}

class Media extends Complejidad {
    obtenerCostoExtra(duracion) {
        return 0.05
    }

    siguiente() {
        return new Maxima()
    }

    anterior() {
        return new Minima
    }
}

class Maxima extends Complejidad {

    calcularCosto(duracion, costoFijo){ // como es la única clase que cambia el porcentaje extra dependiendo algunas variables, cambiamos el método para calcular el costo
        const costoExtra = 0.07
        const costoSinExtra = duracion * costoFijo

        return duracion <= 10 ? costoSinExtra * (1 + costoExtra) : (costoSinExtra * (1 + costoExtra)) + 1000 * (duracion - 10)
    }

    siguiente() {
        return new Minima()
    }

    anterior() {
        return new Media()
    }
}

// Creamos los objetos

const minima = new Minima();
const media = new Media();
const maxima = new Maxima();

module.exports = { minima, media, maxima }