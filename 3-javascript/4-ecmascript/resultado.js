// AUXILIDADORES DE ECMAScript
// Utiliza los auxilidadores de ECMAScript dentro de las funciones (numerosMayoresAMedia & ordenamientoMayorAMenor) de la clase ListaNumeros 
// para obtener el siguiente resultado

/*
    RESULTADO ESPERADO EN CONSOLA:
    
    [6,8,10,9,7] // proviene de la función numerosMayoresAMedia()
    [10,9,8,7,6,5,4,3,2,1] // proviene de la función ordenamientoMayorAMenor
 */

class ListaNumeros {
    constructor(numeros) {
        this._numeros = numeros;
    }

    get numeros() {
        return this._numeros;
    }

    numerosMayoresAMedia() {
        /*
            filter. Filtrar items
            Se utiliza para crear un nuevo array reteniendo solo los elementos que cumplan con una condición específica
            La condición debe devolver `true` o `false`
        */
       
        // Calculo de la media
        const media = this.numeros.reduce((a, b) => a + b, 0) / this.numeros.length;

        console.log(this.numeros.filter(numero => numero > media))
    }

    ordenamientoMayorAMenor() {
        /*
            sort. Ordenamiento condicionado
            Investiga más sobre el funcionamiento de los parámetros (a,b) de sort para que lograr 
            un ordenamiento de mayor a menor

            this.numeros.sort((a, b))
        */

        // COMPLETA AQUÍ CÓDIGO CON MÉTODO .sort
        this.numeros.sort((a,b) => b - a)

        console.log(this.numeros)
    }
    
}

const misNumeros = new ListaNumeros([1,5,3,4,2,6,8,10,9,7])
misNumeros.numerosMayoresAMedia()
misNumeros.ordenamientoMayorAMenor()
