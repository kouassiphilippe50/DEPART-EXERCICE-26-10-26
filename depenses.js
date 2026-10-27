// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.

function calculerTotal(depenses) {
  return depenses.reduce((somme, montant) => somme + montant, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.

function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.

function filtrerGrossesDepenses(depenses) {
  return depenses.filter((montant) => montant > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.

function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.

// copié triée

const copieTriee = [...depensesSemaine].sort((a, b) => a - b); // number[], en FCFA

const total = calculerTotal(depensesSemaine);                    // number, en FCFA
const moyenne = calculerMoyenne(depensesSemaine);                // number, en FCFA par jour
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine); // number[], en FCFA
const maximum = trouverMaximum(depensesSemaine);                 // number, en FCFA

// afficher le rapport demandé

console.log("=== Rapport des dépenses ===");
console.log(`Tableau avant le tri : ${depensesSemaine.join(", ")}`);
console.log("======================================")
console.log(`Total : ${total} FCFA`);
console.log("======================================")
console.log(`Moyenne par jour : ${Math.round(moyenne)} FCFA`);
console.log("======================================")
console.log(`Dépenses au-dessus de 2000 FCFA : ${grossesDepenses.join(", ")}`);
console.log("======================================")
console.log(`Plus grande dépense : ${maximum} FCFA`);
console.log("======================================")
console.log(`Copie triée : ${copieTriee.join(", ")}`);
console.log("======================================")
console.log(`Tableau après le tri : ${depensesSemaine.join(", ")}`);

console.log("======================================")