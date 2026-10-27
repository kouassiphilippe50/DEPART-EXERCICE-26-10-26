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
