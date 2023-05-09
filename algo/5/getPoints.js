/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 13
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat

Voilà un exemple de tableau que peut recevoir ma fonction getPoints


const scores = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:3",
];
*/

function getPoints(array) {
  let points = 0;
  array.forEach((game) => {
    const res = game.split(":");
    if (res[0] === res[1]) points = points + 1;
    else if (res[0] > res[1]) points = points + 3;
    else points = points + 0;
  });
  return points;
}

// function getPoints(array) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     const firstScore = parseInt(array[i].charAt(0));
//     const secondScore = parseInt(array[i].charAt(2));
//     if (firstScore > secondScore) {
//       counter += 3;
//     } else if (firstScore === secondScore) {
//       counter += 1;
//     } else {
//       counter += 0;
//     }
//   }
//   return counter;
// }

module.exports = getPoints;
