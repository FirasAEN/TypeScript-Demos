import { Vegetable } from "./Vegetable";

export class Tomato extends Vegetable {
  public cut(): void {
    throw new Error("Method not implemented.");
  }

}
