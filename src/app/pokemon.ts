export class Pokemon {
    id: string;
    nom: string;
    url: string;
    type: string;

    constructor(id: string, nom: string, url: string){
        this.id = id;
        this.nom = nom;
        this.url = url;
    }
}
