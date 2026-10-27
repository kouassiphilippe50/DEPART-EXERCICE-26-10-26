// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
// function calculerTotal(depenses) {
//   // Votre code ici.
// }
function calculerTotal(depenses) {
  return depenses.reduce((somme, montant) => somme + montant, 0);
}