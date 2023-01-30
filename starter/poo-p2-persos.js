// Gestion de l'inventaire des personnages

/*
Complète ce programme issu du cours pour y ajouter la gestion de l'inventaire des personnages. Voici les améliorations à intégrer :
  - L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
  - Tous les personnages possèdent initialement 10 pièces d'or et une clé.
  - L'inventaire doit être affiché dans la description d'un joueur.
  - Lorsqu'un personnage tue un adversaire, il récupère dans son propre inventaire le nombre de pièces d'or et de clés de cet adversaire.
Utilise ensuite la classe pour
  - Créer Aurora, qui a au départ 150 points de vie et 25 en force
  - Créer un monstre, ZogZog, qui a au départ 20 points de vie et 10 en force
  - Jouer  :
    * Affiche "Bienvenue dans ce jeu d'aventure ! Voici notre courageuse héroïne : …");
    * Affiche la description d'Aurora
    * Affiche "Un affreux monstre arrive : il s'appelle …"
    * Lance une attaque du monstre sur Aurora
    * Lance une rispote d'Aurora (le monstre est tué)
    * Réaffiche la description d'Aurora
*/

class Personnage {
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0; // Toujours 0 au début
    this.inventaire = {
      or : 10,
      cle : 1,
    }
  }
  // Attaque une cible
  attaquer(cible) {
    if (this.sante > 0) {
      const degats = this.force;
      console.log(
        `${this.nom} attaque ${
          cible.nom
        } et lui inflige ${degats} points de dégâts`
      );
      cible.sante -= degats;
      if (cible.sante > 0) {
        console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
      } else {
        cible.sante = 0;
        const bonusXP = 10;
        this.inventaire.or += cible.inventaire.or,
          this.inventaire.cle += cible.inventaire.cle,
        console.log(
          `${this.nom} a tué ${
            cible.nom
          } et gagne ${bonusXP} points d'expérience, ${cible.inventaire.or} piece d'or et ${cible.inventaire.cle} clé`,
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${
      this.force
    } en force, ${this.xp} points d'expérience, ${this.inventaire.or} pièce d'or et ${this.inventaire.cle} clé`;
  }
}

const aurore = new Personnage("Aurore",150, 25);

const zogzog = new Personnage("ZogZog", 20, 10);

console.log(`Bienvenue dans ce jeu d'aventure ! Voici notre courageuse héroïne : ${aurore.nom}`);

console.log(aurore.decrire());

console.log(`Un affreux monstre arrive : il s'appelle ${zogzog.nom}`);

zogzog.attaquer(aurore);

aurore.attaquer(zogzog);

console.log(aurore.decrire());