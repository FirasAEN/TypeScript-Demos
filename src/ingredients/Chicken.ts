import { Meat } from "./Meat";

export class Chicken extends Meat {
  public slice(): void {
    throw new Error("Method not implemented.");
  }

}
