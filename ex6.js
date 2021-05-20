/**
 * Bucle condicionado
 * 
 * Ejecuta el script y observa que sucede.
 * ¿Cuantas veces se ejecuta el código del bucle?
 * 
 * Modifica el código del bucle y una esctrictura condicional if..else; para que:
 * Si i es un número negativo, mostrar por el terminal "Soy un número negativo"
 * Si i es un número positivo, mostrar por el terminal "Soy un número positivo"
 */

 let numeroFinal = 5;

 for (var i=-5;i<numeroFinal; i++) {
  
    // Modificar a partir de aquí
    if(i>0){
        console.log(i, " Soy un número positivo!")
    }else if(i<0){
        console.log(i, " Soy un núemro negativo!")
    }  
}