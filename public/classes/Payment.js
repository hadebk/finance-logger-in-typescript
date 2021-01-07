export class Payment {
    // readonly client: string; // can not be edited neither in the class nor out the class
    // private details: string; // can be edited just in the class
    // public amount: number; // can be edited either in the class or out the class
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
