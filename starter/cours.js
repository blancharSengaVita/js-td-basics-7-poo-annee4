/*****************************
* Les bases de la POO : Objets et Classes
*/
/*
SOURCE :
- https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3196346-trop-classe-la-poo
  APPRENEZ À CODER AVEC JAVASCRIPT - Partie 2 - Évoluez vers des programmes plus complexes
  => 5. Trop classe, la POO !
- https://github.com/oc-courses/intro-javascript
*/

// A. RAPPEL : LES OBJETS
/* EXERCICE 1 : Modélisation de deux chiens :
  - Dominique a un Border Collie qui s'appelle Tobby
  - Yvette a un Caniche qui s'appelle Sloopy
1. crée un objet chien contenant
  - les propriétés
      * nom ("Tobby"),
      * race ("Border Collie") et
      * taille (75) ;
  - la méthode aboyer() qui retourne "Wouf ! Wouf !"
2. crée un autre objet chien contenant
  - les propriétés
      * nom ("Sloopy"),
      * race ("Caniche") et
      * taille (25) ;
  - la méthode aboyer() qui retourne "Wah ! Wah !"
3. nos deux chiens rencontrent un chat…
    affiche dans la console, pour chacun des chiens, le message
    "Tiens, un chat ! … aboie : …"
    (où … est le nom du chien et … utilise la méthode aboie du chien pour le faire aboyer)
*/

// Modélisation de Tobby





// Modélisation de Sloopy









// B. LES CLASSES
/*
Nos deux objets Tobby et Sloopy se ressemblent énormément. 
Ils partagent les mêmes propriétés et les mêmes méthodes,
avec des valeurs un peu différentes…
On peut dire qu'ils appartiennent à une même CLASSE, la classe chien.
Une classe est une abstraction, un modèle.
Elle facilite la création d'objets ayant le même modèle (les mêmes propriétés et méthodes).
*/

// 1. Création d'une classe
/*
En JavaScript, une classe est définie avec le mot-clé class.
- La méthode nommée constructor() appelée à la création de l'objet,
permet d'initialiser cet objet en lui donnant des propriétés.
- À l'intérieur d'une méthode définie dans une classe,
le mot-clé  this  représente l'objet sur lequel la méthode a été appelée.
- Par convention, le nom d'une classe commence par une majuscule.
*/
/*  
class MaClasse {
  constructor(param1, param2) {
    this.propriete1 = param1;
    this.propriete2 = param2;
    // ...
  }
  methode1() {
    this
    // ...
  }
}
*/
/* EXERCICE 2 : Crée une classe Chien qui contient
  - les propriétés
      * nom (le nom du chien),
      * race (la race du chien) et
      * taille (la taille du chien) ;
  - la méthode aboyer() qui retourne
      * 'Wouf ! Wouf !' si le chien mesure plus de 50 cm
      * 'Wah ! Wah !' s'il est plus petit
*/

class Chien {
  constructor (nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  }
  aboyer(){
    if (this.taille < 50) {
      console.log(`wah ! wah !`);
    }else {
      console.log(`WOUF ! WOUF !`);
    }
  }
}




// 2. Utilisation d'une classe
/*
On peut utiliser la classe pour créer des objets.
L'opération de création d'un objet à partir d'une classe s'appelle l'instanciation. 
*/
/*
Les objets sont crées à partir d'une classe à l'aide du mot-clé new.
Celui-ci appelle le constructeur (la méthode constructor()) de la classe
afin d'initialiser le nouvel objet.
La création d'un objet à partir d'une classe s'appelle l'instanciation.
*/
/*
const monObjet = new MaClasse(arg1, arg2, ...);
*/
/* EXERCICE 2 :
1. Utilise la classe chien pour
  - créer Tobby, le Border Collie de talille 75 de Dominique
  - créer Sloopy, le Caniche de taille 25 de Yvette 
  - tant que tu y es, ton voisin a sûrement un chien, crée-le aussi !
2. Une fois qu'ils existent, Tobby, Sloopy et ton chien rencontrent un chat…
*/



const Tobby = new Chien("Tobby", "Border Collie", 75);
const Sloppy = new Chien("Sloppy", "Caniche", 25);

Tobby.aboyer();




/************************************
********/

/* **********************************
* Les objets prédéfinis de JavaScript
*/

/*
JavaScript permet de programmer en utilisant des objets :
on dit que Javascript est un langage orienté objet.

Le langage  JavaScript nous permet de de créer nos propres objets
mais il nous fournit aussi des objets prédéfinis,
qui ont une série de propriétés et de méthodes qu'on peut utiliser telles quelles.

Nous en avons déjà utilisé quelques-uns :
- l'objet  console  donne accès à la console pour y écrire des messages texte ;
- l'objet  Math  rassemble des fonctionnalités mathématiques.
	Par exemple,  Math.random()  renvoie un nombre aléatoire entre 0 et 1 ;
- l'objet Array rassemble des propriétés et fonctions utiles pour manipuler des tableaux :
	Par exemple, monTableau.length est une propriété qui contient le nombre d'éléments du tableau
	monTableau.push() est une méthode qui permet d'ajouter un élément au tableau

Les objets et la manière de les utiliser se trouvent dans la DOCUMENTATION
Par exemple, pour l'objet Array :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
*/