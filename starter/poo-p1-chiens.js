/*
OBJETS - PRÉPA 1 : Modélisation des chiens
1. Crée une classe Chien qui contient
  - les propriétés
      * nom (le nom du chien),
      * race (la race du chien) et
      * taille (la taille du chien) ;
  - la méthode aboyer() qui retourne
      * 'Wouf ! Wouf !' si le chien mesure plus de 50 cm
      * 'Wah ! Wah !' s'il est plus petit
  - la méthode decrire() qui retourne la description du chien
    (… est un … mesurant … cm)
2. Utilise la classe chien pour créer
  - Crockdur, un mâtin de Naples mesurant 75cm
  - Milou, un fox-terrier de 25cm 
3. Affiche dans la console la description de chacun des chiens
4. Ils rencontrent un chat…
  Affiche dans la console : 'Tiens, un chat ! … aboie : …'
*/


class Chien {
  constructor (nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille
  }

  // aboyer(){
  //   if (this.taille > 50){
  //     return 'WOUF ! WOUF!';
  //   } else {
  //     return 'wah ! wah !';
  //   }
  // }
  //
  // decrire(){
  //   console.log(`${this.nom} est un ${this.race} mesurant ${this.taille} cm`)
  // }
}

const crockdur = new Chien("crockdur", "Un matin de Naples", 75);

const objetCrockdur = {
  this.nom : 'nom',
}

// const milou = new Chien("Milou", "fox-terrier", 25);

// crockdur.decrire(); milou.decrire();
// console.log(`tiens un chat ${milou.nom}  : ${milou.aboyer()}`);
// console.log(`tiens un chat ${crockdur.nom}  : ${crockdur.aboyer()}`);
