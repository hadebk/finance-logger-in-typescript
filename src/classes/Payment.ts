import { HasFormatter } from "./../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  // readonly client: string; // can not be edited neither in the class nor out the class
  // private details: string; // can be edited just in the class
  // public amount: number; // can be edited either in the class or out the class

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
