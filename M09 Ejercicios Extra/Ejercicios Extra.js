/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   // const padre = [];
   // for(const prop in objeto){
   //    const aux = [];
   //    aux.push(prop);
   //    aux.push(objeto[prop]);
   //    padre.push(aux);
   // }
   // return padre;

   //otra forma
   // const padre = [];
   // for(const prop in objeto){
   //    padre.push([prop, objeto[prop]]);
   // }
   // return padre;

   // otra forma con Object.keys
   // const array = [];
   // let keys = Object.keys(objeto);
   // keys.forEach(elemento => {
   // array.push([elemento,objeto[elemento]])
   // });
   // return array;

   //en una linea, metodo entries de la clase Object, devuelve un array con los pares clave valor que piden
   return Object.entries(objeto);      
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // const objeto = {};
   
   // for (let letter of string){
   //    if (objeto.hasOwnProperty(letter)) objeto[letter] += 1
   //    else {
   //       objeto[letter] = 1;
   //    }
   // }
   // return objeto;
      
   //OTRA FORMA CON METODOS STRING
   let objeto = {};
   let array = string.split('').sort() //.sort() ordena el array alfabeticamente
   array.forEach(letra => {
      if (objeto.hasOwnProperty(letra)) objeto[letra] += 1
      else {
            objeto[letra] = 1;
      }
   });
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let mayus = "";
   let minus = "";

   for(let i=0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase())
         mayus += string[i];
      else minus += string[i];
   }

   return mayus + minus;
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

  
   fraseNueva = frase.split(' ').map((elem) => {
      return elem.split('').reverse().join('');
   });

   return fraseNueva.join(' ');


}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   
   if(numero == numero.toString().split('').reverse().join('')) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   // let sinAbc = '';
   // for(let i=0; i < string.length; i++){
   //    if(string[i] != 'a' && string[i] != 'b' && string[i] != 'c')
   //       sinAbc += string[i];
   // }
   // return sinAbc;

   //con replace, elimina abc, indicando que busque de manera global (/g) en todo el sgring, sin considerar espacios ""
   return string.replace(/[abc]/g,"");

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:


   // for(let i = 0; i < arrayOfStrings.length - 1; i++) {
   //    for(let j = i+1; j < arrayOfStrings.length; j++){
   //       if(arrayOfStrings[i].length > arrayOfStrings[j].length) {
   //          let aux = arrayOfStrings[i];
   //          arrayOfStrings[i] = arrayOfStrings[j];
   //          arrayOfStrings[j] = aux; 
   //       }
   //    }
         
   // }
   // return arrayOfStrings;

   // con sort
   return arrayOfStrings.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let aux = [];
   for(let i=0; i < array1.length; i++){
      for(let j=0; j < array2.length; j++){
         if(array1[i] === array2[j])
            aux.push(array1[i]);
      }
   }
   return aux;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
