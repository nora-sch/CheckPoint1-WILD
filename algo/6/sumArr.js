/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.

Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
  const res = [];
  for (
    let i = 0;
    i < (arrayA.length > arrayB.length ? arrayA.length : arrayB.length);
    i++
  ) {
    if (arrayA[i] && arrayB[i]) {
      res.push((parseInt(arrayA[i]) + parseInt(arrayB[i])).toString());
    } else {
      arrayA[i] ? res.push(arrayA[i]) : res.push(arrayB[i]);
    }
  }
  return res;
}

// function sumArr(arrayA, arrayB) {
//   const newArray = [];

//   if(arrayA.length>arrayB.length){
//     for (let i = 0; i < arrayA.length; i++) {
//       if (arrayB[i] !== undefined) {
//         const first = parseInt(arrayA[i]);
//         const second = parseInt(arrayB[i]);
//         const resultat = first + second;
//         newArray.push(resultat.toString());
//       } else {
//         newArray.push(arrayA[i]);
//       }
//     }
//   }else{
//     for (let i = 0; i < arrayB.length; i++) {
//       if (arrayB[i] !== undefined) {
//         const first = parseInt(arrayA[i]);
//         const second = parseInt(arrayB[i]);
//         const resultat = first + second;
//         newArray.push(resultat.toString());
//       } else {
//         newArray.push(arrayB[i]);
//       }
//     }
//   }
//   return newArray;
// }

module.exports = sumArr;
