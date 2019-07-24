import { Cheese } from './Cheese';

export class Parmesan extends Cheese {
  public prepare(): void {
    throw new Error("Method not implemented.");
  }


}
