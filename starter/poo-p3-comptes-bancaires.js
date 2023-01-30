// Comptes bancaires

/*
Reprenons le contexte des comptes en banque issu d'un précédent exercice.
Un compte bancaire sera modélisé par une classe définie comme suit :
  - Une propriété titulaire initialisée par le constructeur.
  - Une propriété solde valant initialement 0.
  - Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
  - Une méthode decrire() renvoyant la description du compte.

Ecrivez un programme qui crée 3 comptes bancaires,
  - l'un appartenant à Alex,
  - le deuxième à CLovis
  - et le troisième à Marco.
Stockez ces comptes dans un tableau.

Ensuite, le programme crédite 1000 €
et affiche la description de chacun des comptes.
*/

class CompteBancaire {
  constructor (titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
  }

  crediter(montant){
    return this.solde += montant;
  }

  decrire(){
    return `Le titulraire est ${this.titulaire} et a un solde de ${this.solde}`;
  }
}

const alex = new CompteBancaire("Alex");
const clovis = new CompteBancaire("Clovis");
const marco = new CompteBancaire("Marco");

const tableau = [alex, clovis, marco];

tableau.forEach(compte => compte.crediter(1000));

for (const compte of tableau){
  console.log(compte.decrire());
}

