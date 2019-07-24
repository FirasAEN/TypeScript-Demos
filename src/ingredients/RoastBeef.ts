import { Meat } from "./Meat";

export class RoastBeef extends Meat {
  public slice(): void {
    throw new Error("Method not implemented.");
  }

}
