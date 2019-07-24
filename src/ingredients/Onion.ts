import { Vegetable } from "./Vegetable";

export class Onion extends Vegetable {
  public cut(): void {
    throw new Error("Method not implemented.");
  }

}
