const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// Conversion des trois dépenses textuelles en nombres
const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA

// Calcul du total, du budget restant et de l'état du budget
const totalDepenses = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepenses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean

// Affichage du rapport avec des littéraux de gabarit
console.log(`Rapport de dépenses de ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Transport : ${transport} FCFA`);
console.log(`Alimentation : ${alimentation} FCFA`);
console.log(`Loisirs : ${loisirs} FCFA`);
console.log(`Total des dépenses : ${totalDepenses} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);

