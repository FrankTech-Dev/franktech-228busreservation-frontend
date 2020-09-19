export class Voyage {
    identifiant: string;
    dateVoyage: string;
    heureDepart: string;
    placeTotal: number;
    placeRestante: number;
    prixVoyage: number;
    nomCompagnie: string;
    villeDepart: string;
    villeArrivee: string;
    frais: number;

    constructor(voyage:Voyage){
        voyage.dateVoyage = "";
        voyage.frais = 90;
        voyage.heureDepart = "";
        voyage.identifiant = "";
        voyage.nomCompagnie= "";
        voyage.placeRestante = 10;
        voyage.placeTotal = 20;
        voyage.prixVoyage = 1200;
        voyage.villeArrivee = "Lomé";
        voyage.villeDepart = "Kara";

        this.dateVoyage = voyage.dateVoyage;
        this.frais = voyage.frais;
        this.heureDepart = voyage.heureDepart;
        this.identifiant = voyage.identifiant;
        this.nomCompagnie = voyage.nomCompagnie;
        this.placeRestante = voyage.placeRestante;
        this.placeTotal = voyage.placeTotal;
        this.prixVoyage = voyage.prixVoyage;
        this.villeArrivee = voyage.villeArrivee;
        this.villeDepart = voyage.villeDepart;
    }
}
