export class Invoice {
    // readonly client: string; // can not be edited neither in the class nor out the class
    // private details: string; // can be edited just in the class
    // public amount: number; // can be edited either in the class or out the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
