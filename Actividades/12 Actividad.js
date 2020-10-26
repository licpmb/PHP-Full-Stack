    //Probando imprimir por consola
    console.log('Interpretando Java Script desde HTML')
    console.log(10)
    console.log(true)
    console.log(10 + 10 + 10)
    console.log('1' + 1)
    console.log(1 + true)
    console.log(true + true)
    console.log('Estoy concatenando ' + 1 + (10 / 2))
        //Probando hacer ventanas
    alert('Hola Mundo')
    document.write('Hola gente')
        //crear variable
    var nombre, apellido
    nombre = 'Pamela';
    apellido = 'MB';

    console.log(nombre + apellido)


    var nota1 = Number(prompt('Ingrese la primer nota: '))
        //nota1 = Number(nota1)

    var nota2 = Number(prompt('Ingrese la segunda nota: '))
        //nota2 = Number(nota2)

    var nota3 = Number(prompt('Ingrese la tercer nota: '))
        //nota3 = Number(nota3)

    if (nota1 > 7) {
        alert('Aprobó 😆')
    } else {
        alert('Nos vemos en Marzo 🤷‍♀️')

    }

    var promedio = (nota1 + nota2 + nota3)
    document.write(nota1)
    if (promedio == 10) {
        document.write('aprobaste con un 10 y te ganaste un premio para nerds.');
    } else if (promedio > 7) {
        alert('aprobaste zafando')
    } else if (promedio < 7 && promedio > 0) {
        document.write('segui participando')
    } else {
        document.write('debes haber puesto cualquier cosa')
    }

    //.....indice    0          1          2

    var nombres = ['wilber', 'florencia', 'natalia', 'Maria', 'Omar']

    nombres.push('viviana')
    nombres.push('Natalia')
    nombres.push('Matias')
    nombres.unshift('Santiago')
    nombres.unshift('Marisa')

    console.log(nombres)

    nombres.shift() //elimina el primero

    console.log(nombres)
    nombres.shift() //elimina el primero
    console.log(nombres)

    nombres.pop() //elimina el ultimo
    console.log(nombres)


    nombres.splice(1, 2) // con el primer valor.. es el valor del indice.. y el 2 es la cantidad de elementos a eliminar
    console.log(nombres)
    console.log('mi Array/vector tiene: ' + nombres.length + ' Elementos')

    nombres.splice(1, 0, 'Alejandro')

    for (var i = 0; i < nombres.length; i++) {


        console.log(nombres[i])


    }

    //funciones

    console.log('hola funciones')
    var nombre = 'pamela' //varianles globales

    function mostrarValor() {
        var edad = 33 //variable local
        console.log('probando funcion' + nombre)
        console.log('otra linea' + edad)
    }

    //llamado de la funcion => Invocar función

    mostrarValor()

    function mostrarData(a, b, c) {

        var suma = a + b
        console.log(suma)
        console.log(c)
    }

    var nombre = 'se termina la clase'
    mostrarData(10, 25, nombre)

    /*Función Declarativa
    funcion holaNoguera(edad, apellido, 25

    )


    //Función Expresiva

    var nombreEstudiante = funcion() {
        console.log('Hola Función Expresiva')
        return 14
    }


    //Función Flecha

    var nombreEstudiante = () => {
        console.log('Hola Función Flecha')
        return 14
    }
*/
    //Callback

    console.log('*****Callback******')
        //un llamado de funcion dentro de otra funcion

    function saludar(Callback) {
        Callback()

    }

    saludar(function() { console.log('hola soy un callback') })

    //callback con 2 parámetros, un dato x y un callback
    function saludar2(name, callback) { callback(name) }

    //Dato 1..............................Paso de función.......................
    saludar2('Chirinos', function(name) {
        console.log('hola, soy ', name)
    })


    //callback con 3 parámetros

    function saludar3(num1, num2, callback) { callback(num1 + num2) }
    sumar(10, 10, function(num1, num2))


    function saludar3(variable, callback) { callback(variable) }
    var nombre = 'Pamela'
    saludar3(nombre, function(nombre) { console.log('hola' + nombre) })

    var count = 0

    function contador() {
        count++
        console.log(count)
    }

    contador()

    count = 'hola estoy modificando llamado'

    contador()