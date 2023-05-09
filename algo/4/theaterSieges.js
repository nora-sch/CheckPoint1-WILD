/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes :
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple du rendu final :

[
  ['1-1', '1-2', '1-3', ..., '1-100'],
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ...
  ['26-1', '26-2', '26-3', ..., '26-100']
]
*/

// function theaterSieges() {
//   const matrice = [];
//   for (let i = 1; i <= 26; i++) {
//     let tab = [];   // IL NE FAUT PAS REDECLARER UNE VARIABLE DANS LA BOUCLE  - CA PRENDS DE LA MEMOIRE
//     for (let j = 1; j <= 100; j++) {
//       tab.push(`${i}-${j}`);
//     }
//     matrice.push(tab);
//   }
//   return matrice;
// }

function theaterSieges() {
  const rows = [];
  const columns = [];
  for (let i = 1; i <= 26; i++) {
    rows.length = 0;
    for (let j = 1; j <= 100; j++) {
      rows.push(`${i}-${j}`);
    }
    columns.push([...rows]);
  }
  return matrice;
}

// Pour visualiser votre fonction.
console.log(theaterSieges());

module.exports = theaterSieges;
