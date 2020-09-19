export class Reservation {
    nbPassager: number;
    idClient: number;
    passagers: string;
    identifiantVoyage: string;
    moyenDePayement: string;
    telephone : number;
    reference : string;
    montant: string;
    refTransaction: string;

    constructor(idVoyage:string, nbPassager:number, passagers:string, moyenDePayement: string, tel: number){
        this.identifiantVoyage = idVoyage;
        this.nbPassager = nbPassager;
        this.passagers = passagers;
        this.moyenDePayement = moyenDePayement;
        this.telephone = tel;
        this.reference = "";
        this.montant = "";
        this.refTransaction = "";

    }

    
}
