export class Ingredient {
    public   name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}


export class User {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}