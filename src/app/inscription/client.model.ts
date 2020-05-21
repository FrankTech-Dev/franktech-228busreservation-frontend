export class Client {
  public idClient: number;
  public nomClient: string
  public prenom: string
  public telephone: number
  public email: string
  

  constructor(nom:string, prenom:string, telephone:number, email:string) {
      this.nomClient = nom;
      this.prenom = prenom;
      this.telephone = telephone;
      this.email = email;
  }
}