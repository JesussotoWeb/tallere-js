/* 
  imprimir
  variables
  tipos de datos
  condicionales
  bucles
*/



/* alert("Hola mundo")
document.write("Hola desde body") */
/* console.log("Hola desde la consola"); */

/* 
String
number: 

*/

// Variables, son como cajas, que dentro tiene un valor y un tipo de dato

let edad = 14;
let dato2 = "123";
let dato3 = true; //false




// if else, if if else else

/* if(edad > 18){
  console.log("El estudiante es mayor de edad");

}else if(edad == 14){
  console.log(`El estudiante tiene ${edad} años`); 


}else{
  console.log("El estudiante no es mayor de edad");

}
 */


// FOR
/* for(let i = 1; i <= 10; i++){
  console.log(`Numero: ${i}`)
} */

// WHILE
/* let i = 0;
while(i < edad){
  console.log(`Edad: ${edad}`)

  i++;
} */
/* let i = 5;
do {
  console.log("DO WHILE")
  i++;
}while(i < 5) */

// VECTORES ARRAYS
let colores = ["rojo", "azul", "negro", "amarillo"]
//               0       1        2         3

let lista = [
  ["manzana", "pera", "banana", "mandarina"], //0
 //    0        1        2           3 
  ["rojo", "azul", "negro", "amarillo"] // 1
]
console.log(lista[1][2])
/* 
for (let i = 0; i < colores.length; i++){
  console.log(`Color: ${colores[i]} Indice: ${i}`)
}

colores.forEach((element, index) => {
  console.log(`Color: ${element} index: ${index}`)
  
}); */